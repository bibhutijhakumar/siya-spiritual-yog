from pathlib import Path
root = Path('d:/React/therapy---siya-wellness/src')
files = list(root.rglob('*.tsx')) + [root / 'index.css']
replacements = [
    ('bg-surface-container-high/50','bg-slate-200/50'),
    ('bg-surface-container-low/30','bg-slate-50/30'),
    ('shadow-primary-container/40','shadow-orange-600/40'),
    ('shadow-primary/20','shadow-[0_32px_64px_-16px_rgba(176,47,0,0.2)]'),
    ('hover:bg-primary/5','hover:bg-orange-800/5'),
    ('bg-primary/5','bg-orange-800/5'),
    ('text-secondary/60','text-slate-600/60'),
    ('border-outline-variant/20','border-slate-300/20'),
    ('border-primary/20','border-orange-800/20'),
    ('bg-surface-container','bg-slate-100'),
    ('bg-background','bg-gray-50'),
    ('bg-surface','bg-gray-50'),
    ('bg-primary-container','bg-orange-600'),
    ('bg-primary','bg-orange-800'),
    ('text-primary','text-orange-800'),
    ('text-secondary','text-slate-600'),
    ('text-on-surface-variant','text-slate-600'),
    ('text-on-surface','text-slate-950'),
    ('border-outline-variant','border-slate-300'),
    ('border-primary','border-orange-800'),
    ('py-spacing-section','py-24'),
    ('text-balance',''),
]
for path in files:
    text = path.read_text(encoding='utf-8')
    orig = text
    for old, new in replacements:
        text = text.replace(old, new)
    if text != orig:
        path.write_text(text, encoding='utf-8')
        print(f'Patched {path}')
