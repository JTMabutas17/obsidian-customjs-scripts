class GitController {
    async checkoutBranch(tp) {
        const branch = await tp.system.prompt("Enter weight (lbs): ", "", false, false);
        return branch;
    }
}