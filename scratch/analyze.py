import os, re

src_files = {}
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.ts', '.tsx', '.js', '.jsx', '.css')):
            path = os.path.normpath(os.path.join(root, f)).replace('\\', '/')
            src_files[path] = f

imported_files = set(['src/main.tsx', 'src/index.css', 'src/vite-env.d.ts'])

import_pattern = re.compile(r"""(?:from|import)\s+['"]([^'"]+)['"]|import\(\s*['"]([^'"]+)['"]\s*\)""")

for path in src_files:
    with open(path, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
    matches = import_pattern.findall(content)
    file_dir = os.path.dirname(path)
    for m in matches:
        target = m[0] or m[1]
        if target.startswith('.'):
            resolved_base = os.path.normpath(os.path.join(file_dir, target)).replace('\\', '/')
            for ext in ['', '.ts', '.tsx', '.js', '.jsx', '.css', '/index.ts', '/index.tsx']:
                cand = resolved_base + ext
                if cand in src_files:
                    imported_files.add(cand)

unimported = []
for path in src_files:
    if path not in imported_files and not path.endswith('.d.ts'):
        unimported.append(path)

print(f'Total src files: {len(src_files)}')
print(f'Imported src files: {len(imported_files)}')
print(f'Unimported files count: {len(unimported)}')
for u in unimported:
    print('  ', u)
