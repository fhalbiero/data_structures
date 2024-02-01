
function houseRobber(houses) {
    if (houses.length < 2) return houses[0];

    const total = [houses[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < houses.length; i++) {
        total.push(Math.max(houses[i] + total[i - 2], total[i - 1]));
    }
    return total[total.length - 1];
}
//total = 2, 7, 7, 8, 11, 11, 11, 19
console.log(houseRobber([2, 7, 3, 1, 4, 2, 1, 8]))