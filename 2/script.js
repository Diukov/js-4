let i = 0;

// постусловие
do {
  i++;
  if (i%2) continue;
  console.log(i);
} while(i <= 20);

i = 0;

do {
  i++;
  if (!(i%2)) continue;
  console.log(i);
} while(i < 20);

// предусловие
i = 0;

while(i <= 20) {
  i++;
  if (i%2) continue;
  console.log(i);
}

i = 0;

while(i < 20) {
  i++;
  if (!(i%2)) continue;
  console.log(i);
}

// цикл for
for(i = 1; i <= 20; i++) {
  if (i%2) continue;
  console.log(i);
}

for(i = 1; i <= 20; i++) {
  if (!(i%2)) continue;
  console.log(i);
}