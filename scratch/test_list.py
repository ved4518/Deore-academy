import os

# Let's inspect which photos in scratch/gallery_thumbs are classrooms/halls/desks
# Let's list files
files = sorted(os.listdir('scratch/gallery_thumbs'))
print("Files:", len(files))
for f in files[:20]:
    print(f)
