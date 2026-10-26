import os

# Let's inspect images in scratch/gallery_thumbs
files = sorted(os.listdir('scratch/gallery_thumbs'))
print(f"Total downloaded thumbs: {len(files)}")
