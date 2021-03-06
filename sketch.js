function setup() {
	createCanvas(600, 500);
	pixelDensity(1);
	var maxIterations = 100;
	loadPixels();
	for(var x = 0; x < width; x++){
		for(var y = 0; y < innerHeight; y++){

			var a = map(x, 0, width, -2, 2);
			var b = map(y, 0, height, -2, 2); 

			var ca = a;
			var cb = b;

			var n = 0;

			while(n < 100){
				var aa = a * a - b * b;
				var bb = 2 * a * b;

				a = aa + ca;
				b = bb + cb;

				if(a + b > 16){
					break;
				}

				n++;
			}

			var bright = map(n, 0, 100, 0, 255);

			if(n == maxIterations){
				bright = 0;
			}
 

			var pix = (x + y * width) * 4;
			pixels[pix + 0] = bright;
			pixels[pix + 1] = bright;
			pixels[pix + 2] = bright;
			pixels[pix + 3] = 255;

		}
	}
	updatePixels();
}

