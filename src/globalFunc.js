export const func = {
  // functionName: (data) => {
  // },
  hoverWord(word) {
    let result = [];
    for (var i = 0; i < word.length; i++) {
      if (word[i] == " ") {
        result.push(
          `<span class="hoverText__item hoverText__empty">${word[i]}</span>`
        );
      } else {
        result.push(`<span class="hoverText__item">${word[i]}</span>`);
      }
    }
    return `<div class="hoverText">${result.join("")}</div>`;
  },
  compareDate() {
    // let now = new Date();
    // let startDate = new Date("2021.03.08 12:00:00");
    // return startDate.getTime() <= now.getTime() ? true : false;
    return true;
  },
  // },
};
