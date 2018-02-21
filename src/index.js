module.exports = function solveEquation(equation) {
  	equation=equation.replace(/\s/g, "");
        function root(k){
                n=equation.match(/[-+]{0,1}\d{1,16}/);
                equation=equation.substring(equation.search("x")+k);
                n=n.join('');
                n=n.replace(/\s/g, "");
                n=parseInt(n);
                return n;
        }
        var a= root(3);
        var b= root(1);
        var c= root(0);
        var d=b*b-4*a*c;
		var roots=[];
        roots[0]=Math.round((-b+Math.sqrt(d))/(2*a));
        roots[1]=Math.round((-b-Math.sqrt(d))/(2*a));
		if (roots[1]<roots[0]){
			var k=roots[0];
			roots[0]=roots[1];
			roots[1]=k;
		}

		
		return roots;
}
