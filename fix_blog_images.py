import re

with open('lib/products.ts', 'r') as f:
    content = f.read()

# I will replace any image URL starting with https://images.unsplash.com/ in lib/products.ts
# Since all blog images are currently using Unsplash. Let's make sure no other images are using it.
# Actually, the user said "All the blog featured images should be placeholders of Australian Flag"
# Are there any other unsplash images? Let's replace all unsplash images.
content = re.sub(r"'https://images\.unsplash\.com/[^']+'", r"'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80'", content)

with open('lib/products.ts', 'w') as f:
    f.write(content)
