const fs = require('fs');
const https = require('https');

// Simple fetch wrapper using native https to bypass cert errors
function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { rejectUnauthorized: false }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', (err) => reject(err));
  });
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

async function run() {
  console.log('Fetching specialities index...');
  const indexHtml = await fetchHtml('https://salemsaravanahospital.com/specialities.php');
  
  // Regex to match <a href="services.php?id=X"...>...<h4>Name</h4>
  const regex = /<a href="services\.php\?id=(\d+)"[^>]*>[\s\S]*?<h4>([^<]+)<\/h4>/g;
  
  let match;
  const specialities = [];
  
  while ((match = regex.exec(indexHtml)) !== null) {
    const id = match[1];
    const name = match[2].trim();
    const slug = slugify(name);
    
    console.log(`Fetching ${name} (ID: ${id})...`);
    try {
      const pageHtml = await fetchHtml(`https://salemsaravanahospital.com/services.php?id=${id}`);
      
      // Extract content from <div class="spc-content"...> ... </div>
      const contentMatch = pageHtml.match(/<div class="spc-content"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/);
      let content = contentMatch ? contentMatch[1].trim() : '';
      
      // Cleanup content
      content = content.replace(/style="[^"]*"/g, '');
      
      specialities.push({
        id,
        name,
        slug,
        content
      });
    } catch (e) {
      console.error(`Failed to fetch ${name}: ${e.message}`);
    }
  }
  
  fs.writeFileSync('./src/data/specialities.json', JSON.stringify(specialities, null, 2));
  console.log('Done! Extracted ' + specialities.length + ' specialities.');
}

run();
