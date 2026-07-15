#!/usr/bin/env python3
import re

# Read the file
with open('app/components/navigation/Navbar.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the Features related state variable
content = content.replace('  const [featuresOpen, setFeaturesOpen] = useState(false);\n', '')

# Remove the Features Dropdown section from desktop nav using regex
# This pattern matches from the Features Dropdown comment to its closing div
pattern1 = r'\n\s+{/\* Features Dropdown \*/}\n\s+<div[\s\S]*?</div>\n\s+<motion\.div whileHover'
replacement1 = '\n\n          <motion.div whileHover'
content = re.sub(pattern1, replacement1, content)

# Remove the Features section from mobile menu
# Pattern to match the Features button and submenu in mobile
pattern2 = r'\n\s+<div>\n\s+<button[\s\S]*?onClick\(\) => setFeaturesOpen\(!featuresOpen\)[\s\S]*?</div>\n\s+</div>\n\s+<Link href="/contact"'
replacement2 = '\n\n            <Link href="/contact"'
content = re.sub(pattern2, replacement2, content)

# Write the file back
with open('app/components/navigation/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Features removed successfully")
