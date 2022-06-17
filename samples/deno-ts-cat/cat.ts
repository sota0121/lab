// cat command in deno

const main = () => {
    // load args
    const args = Deno.args;

    // ---------------------------------------
    // check args
    // [optional]
    // - -h, --help: print help
    // - -n, --number: print number of lines
    // [positional]
    // - file name
    // ---------------------------------------
    // help
    if (args.includes("-h") || args.includes("--help")) {
        console.log(`
        cat [OPTION]... [FILE]...
        Concatenate FILE(s), or standard input, to standard output.
        With no FILE, or when FILE is -, read standard input.
        With no OPTION, print the contents of FILEs to standard output.
        Otherwise, read each file in turn, and print its contents to standard output.
        OPTION can be any of the following:
        -n, --number: print the number of lines of each file, then the total number of lines
        (future) -s, --squeeze-blank: ignore repeated empty lines
        (future) -t, --show-tabs: print TAB characters as ^I
        (future) -v, --show-nonprinting: use ^ and M- notation, except for LFD and TAB
        (future) -T, --show-control-chars: use ^ notation for all nonprinting characters
        -h, --help: display this help and exit
        `);
    } else {
        // extract options
        const numberFlag = args.includes("-n") || args.includes("--number");

        // extract files
        const filNames = args.filter(arg => !arg.startsWith("-"));

        // cat files
        filNames.forEach(filName => {
            // read file as text
            const text = Deno.readTextFileSync(filName);
            const lines = text.split("\n");

            // make lines to print
            let linesToPrint = lines;
            if (numberFlag) {
                linesToPrint = lines.map((line, index) => `${index + 1}: ${line}`);
            }

            // print lines
            linesToPrint.forEach(line => console.log(line));
        });
    }
    return 0;
};

const ret: number = main();
Deno.exit(ret);
