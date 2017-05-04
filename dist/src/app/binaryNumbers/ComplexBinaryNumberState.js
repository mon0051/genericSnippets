"use strict";

var BinaryNumberState = require("./binaryNumberState");

function ComplexBinaryNumberState(state) {
    if (!state) {
        state = {};
    }

    this.simplePart = state.simplePart || new BinaryNumberState();
    this.remainder = state.remainder || new BinaryNumberState();
}
//# sourceMappingURL=ComplexBinaryNumberState.js.map