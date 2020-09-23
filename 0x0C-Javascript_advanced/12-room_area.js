const roomDimensions = {
  width: 50,
  length: 100,
  getArea: function () {
    return this.width * this.length;
  },
};

const GlobalArea = roomDimensions.getArea;

const boundGetArea = GlobalArea.bind(roomDimensions);
