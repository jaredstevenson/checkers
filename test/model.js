import {isEven, isPieceThere, isNextDiagnol, isTwoDiagnol, isPieceInBetween, isLegalMove, movePiece} from '../lib/model.js';
import {expect} from 'chai';
// import { pieces} from '../pieces.js';



var pieces = [{
  id: 1,
  row: 1,
  column: 1,
  type: "red",
  king: false
},
{
  id: 2,
  row: 1,
  column: 3,
  type: "red",
  king: false
},
{
  id: 3,
  row: 1,
  column: 5,
  type: "red",
  king: false
},
{
  id: 4,
  row: 1,
  column: 7,
  type: "red",
  king: false
},
{
  id: 5,
  row: 2,
  column: 2,
  type: "red",
  king: false
},
{
  id: 6,
  row: 2,
  column: 4,
  type: "red",
  king: false
},
{
  id: 7,
  row: 2,
  column: 6,
  type: "red",
  king: false
},
{
  id: 8,
  row: 2,
  column: 8,
  type: "red",
  king: true
},
{
  id: 9,
  row: 3,
  column: 1,
  type: "red",
  king: false
},
{
  id: 10,
  row: 3,
  column: 3,
  type: "red",
  king: false
},
{
  id: 11,
  row: 3,
  column: 5,
  type: "red",
  king: false
},
{
  id: 12,
  row: 3,
  column: 7,
  type: "red",
  king: false
},
{
  id: 13,
  row: 8,
  column:  2,
  type: "black",
  king: false
},
{
  id: 14,
  row: 8,
  column:  4,
  type: "black",
  king: false
},
{
  id: 15,
  row: 8,
  column: 6 ,
  type: "black",
  king: false
}]


function runTests () {
  describe("isEven", function (){
    it("should return true when even", function (){
      expect(isEven(2),"2").to.be.true;
      expect(isEven(0)).to.be.true;
      //expect(isEven(-1),"0").to.be.true;

    })
  })
  describe("isPieceThere", function () {
    it("should return true when piece is there", function (){

      expect(isPieceThere(pieces, 1, 1)).to.be.true;
      // expect(isPieceThere(pieces, 4, 2)),to.be.true;

    })

  })
  describe("isTwoDiagnol", function () {
    it("should return true if the given space is on the next two diagnols", function () {
      expect(isTwoDiagnol(pieces[2],3,7)).to.be.true;
    })
  })

  describe("isNextDiagnol", function () {
    it("should return true if the given space is on the next diagnol", function () {
      expect(isNextDiagnol(pieces[2],2,6)).to.be.true;
    })
  })

  describe("isPieceInBetween", function () {
    it("should return true if there is a piece in between the two squares", function () {
      expect(isPieceInBetween(pieces,pieces[0],3,3)).to.be.true;
      expect(isPieceInBetween(pieces,pieces[11], 1 , 5)).to.be.true;

    })
  })
  describe("isLegalMove", function () {
    it("should return true if the move is legal", function () {
      expect(isLegalMove(pieces, pieces[11],4,8)).to.be.true;
      // expect().to.be.true;

    })
  })

  describe("movePiece", function () {
    it("should return the pieces array after the piece has been moved.", function () {
      // expect(movePiece(pieces, pieces[11],4,8)).to.not.equal('pieces');
      expect(movePiece(pieces, pieces[4],4,4)).to.not.equal(pieces);

    })
  })

  // describe("", function () {
  //   it("should return true if the", function () {
  //     expect().to.be.true;
  //     expect().to.be.true;
  //
  //   })
  // })

  // describe("", function () {
  //   it("should return true if the", function () {
  //     expect().to.be.true;
  //     expect().to.be.true;
  //
  //   })
  // })

}
runTests();
