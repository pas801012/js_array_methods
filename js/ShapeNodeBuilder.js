// factory

/**
 * Create red triangle usage:
 * var redTriangle = [ShapeNodeBuilder.createNode()]
 *                     .map( ShapeNodeBuilder.makeTriangle, ShapeNodeBuilder )
 *                     .map( ShapeNodeBuilder.makeRed, ShapeNodeBuilder )[0];
 * append to document:
 * document.getElementById( 'result' ).appendChild( redTriangle );
 */
var ShapeNodeBuilder = {
  createNode: function() {
    return document.createElement( 'div' );
  },

  /**
   * 
   * @param {HTMLDivElement} el div
   * @param {String} shape shape class
   */
  setShape: function( el, shape ) {
    var cls = el.className.split(' ');
    if ( cls.length <=0 ) {
      cls.push( shape );
    }
    else {
      cls[0] = shape;
    }
    el.className =  cls.join(' '); 
    return el;
  },

  /**
   * 
   * @param {HTMLDivElement} el div
   * @param {String} shape color class
   */
  setColor: function( el, color ) {
    var cls = el.className.split(' ');
    if ( cls.length <=0 ) {
      cls.push( null );
      cls.push( color );
    }
    else {
      cls[1] = color;
    }
    el.className =  cls.join(' '); 
    return el;
  },
  
  makeTriangle: function( el ) {
    return this.setShape( el, 'triangle' );
  },
  
  makeSquare: function( el ) {
    return this.setShape( el, 'square' );
  },

  makeCircle: function( el ) {
    return this.setShape( el, 'square' );
  },

  /** @public
   * @param el {HTMLDivElement} DOM element
   */
  makeRed: function( el ) {
    return this.setColor( el, 'red' )
  },

  /** @public
   * @param el {HTMLDivElement} DOM element
   */
  makeBlue: function( el ) {
    return this.setColor( el, 'blue' )
  },

  /** @public
   * @param el {HTMLDivElement} DOM element
   */
  makeGreen: function( el ) {
    this.makeYel
    return this.setColor( el, 'green' );
  },
  
  /** @public
   * @param el {HTMLDivElement} DOM element
   */
  makeYellow: function( el ) {
    return this.setColor( el, 'green' );
  },
  
  /**/
  _: null
}