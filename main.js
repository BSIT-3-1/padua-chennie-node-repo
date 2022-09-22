function diamond(l, i = 1) {
    const
       ASTERISKS  = '*',
        SPACE = ' ',
        LINE = SPACE.repeat((l - i) / 2) + ASTERISKS.repeat(i);

    console.log(LINE);
    if (i >= l) return;
    diamond(l, i + 2);
    console.log(LINE);
}

diamond(5)