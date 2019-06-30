// main business logic

function createRecoloredShapes() {
  console.log( 'running') ;
  var initialContainer = document.getElementById( 'test' );            // get initial container
  var initialShapeNodes = initialContainer.querySelectorAll( 'div' );  // get node elements
  var initialShapes = [].slice.call( initialShapeNodes );              // transform into array

  var resultNode = document.createElement( 'div' );
  resultNode.id = 'result';
  resultNode.className = 'container horiz';

  // create copy of existing divs
  var clonedShapes = initialShapes.map( function( shape ) {
    return shape.cloneNode( true );
  });

  // append nodes to the result container:
  clonedShapes.forEach( shape => {
    resultNode.appendChild( shape );
  });


  //create description node
  var mapDesc = document.createElement( 'h5' );
  mapDesc.innerText = 'shapes.map( shape => makeYellow( shape ) )'

  // append node to the document target container
  var target = document.body.querySelector( 'div.main' );
  target.appendChild( mapDesc );
  target.appendChild( resultNode );

  // change colors for the shape
  clonedShapes.forEach( function( shape ) {
    var cls = shape.className.split(' ');
    cls[1] = 'yellow';
    shape.className = cls.join(' ');
  });
}

window.onload = function() {
  createRecoloredShapes();
}
