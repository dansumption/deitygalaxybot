const font = ["Helvetica", "Gill Sans", "Times New Roman", "Futura", "Roman"];

const pointSize = ["12", "36", "72", "3", "11", "24", "#pointSize#.3333333"];

const writingStyle = [
  "#font# italic",
  "#font# bold",
  "bold italic #font#",
  "#pointSize# point #font#"
].concat(font);

module.exports = {
  writingStyle,
  pointSize,
  font
};
