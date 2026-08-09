import os
import re

directories = ['app', 'components', 'context', 'lib']

for directory in directories:
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.js'):
                path = os.path.join(root, file)
                with open(path, 'r') as f:
                    content = f.read()
                
                if 'info@australianpropmoney.com.au' in content:
                    new_content = content.replace('info@australianpropmoney.com.au', 'info@australianpropmoney.org')
                    with open(path, 'w') as f:
                        f.write(new_content)

