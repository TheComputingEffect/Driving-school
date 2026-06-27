const fs = require('fs');
const path = require('path');

const locationsDir = path.join(__dirname, 'app', 'locations');
const folders = fs.readdirSync(locationsDir).filter(f => f.startsWith('driving-school-'));

for (const folder of folders) {
  const filePath = path.join(locationsDir, folder, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Remove the entire FAQ about pickup
  content = content.replace(/,\s*\{\s*question:\s*"Do you offer[^}]+pickup[^}]+"[\s\S]*?answer:\s*"Yes, we provide[^}]+"\s*\}/g, '');
  
  // 2. Remove "Pickup and drop facilities are fully available."
  content = content.replace(/Pickup and drop facilities are fully available\./gi, '');
  content = content.replace(/Home pickup and drop services are fully functional in this sector\./gi, '');
  content = content.replace(/We offer doorstep pickup and drop services for all residents and college students in Kuniamuthur\./gi, '');

  // 3. Replace the instructor paragraph
  content = content.replace(/Our instructors pick you up directly from your doorstep, drive to our dedicated training ground in Kovaipudur, guide you through structured learning modules, and drop you back\./g, 'Our instructors guide you through structured learning modules at our dedicated training ground in Kovaipudur.');

  // 4. Remove the Pickup Zone list item
  content = content.replace(/<li[^>]*>\s*<MapPin[^>]*\/>\s*<strong>Pickup Zone:<\/strong>[^<]*<\/li>/g, '');

  // 5. Remove "and offer home pickup services" in Kovaipudur
  content = content.replace(/and offer home pickup services\./g, '.');

  // 6. Fix "pickup/drop" in meta tags
  content = content.replace(/pickup\/drop in Kuniamuthur/g, 'expert classes in Kuniamuthur');
  
  // 7. Fix "Doorstep Pickup &amp; Safe Training Batches"
  content = content.replace(/Doorstep Pickup &amp; Safe Training Batches/g, 'Safe Training Batches');

  fs.writeFileSync(filePath, content);
  console.log(`Cleaned ${folder}`);
}
