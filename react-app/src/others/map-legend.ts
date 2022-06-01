/* raster-colorizer-stops: **PRECIPITATION**
	stop(0, rgba(225, 200, 100, 0))
	stop(0.1, rgba(200, 150, 150, 0))
	stop(0.2, rgba(150, 150, 170, 0))
	stop(0.5, rgba(120, 120, 190, 0))
	stop(1, rgba(110, 110, 205, 0.3))
	stop(10, rgba(80,80, 225, 0.7))
	stop(140, rgba(20, 20, 255, 0.9));*/
  export const precipitationStyle = `{
  background: rgb(225,200,100);
  background: linear-gradient(0deg,
  rgba(225,200,100,0) 0%,
  rgba(110,110,205,0.3) 0.7142857%, 
  rgba(80,80,225,0.7) 7.142857%, 
  rgba(20,20,255,0.9) 100%);
}`;

/* {stop(0, rgba(255, 255, 255, 0.0)) **CLOUDS** -> DON'T FORGET TO INVERT!
	stop(10, rgba(253, 253, 255, 0.1))
	stop(20, rgba(252, 251, 255, 0.2))
	stop(30, rgba(250, 250, 255, 0.3))
	stop(40, rgba(249, 248, 255, 0.4))
	stop(50, rgba(247, 247, 255, 0.5))
	stop(60, rgba(246, 245, 255, 0.75))
	stop(70, rgba(244, 244, 255, 1))
	stop(80, rgba(243, 242, 255, 1))
	stop(90, rgba(242, 241, 255, 1))
	stop(100, rgba(240, 240, 255, 1));} */

  export const cloudsStyle = `{
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, 
    rgba(2,2,0,0.1) 10%, 
    rgba(3,4,0,0.2) 20%, 
    rgba(5,5,0,0.3) 30%, 
    rgba(6,7,0,0.4) 40%, 
    rgba(8,8,0,0.5) 50%, 
    rgba(9,10,0,0.75) 60%, 
    rgba(11,11,0,1) 70%, 
    rgba(12,13,0,1) 80%, 
    rgba(13,14,0,1) 90%, 
    rgba(15,15,0,1) 100%);
  }`;

/* { **TEMPERATURE**
  stop(-40, rgba(130, 22, 146, 1))
  stop(-30, rgba(130, 87, 219, 1))
  stop(-20, rgba(32, 140, 236, 1))
  stop(-10, rgba(32, 196, 232, 1))
  stop(0, rgba(35, 221, 221, 1))
  stop(10, rgba(194, 255, 40, 1))
  stop(20, rgba(255, 240, 40, 1))
  stop(25, rgba(255, 194, 40,1))
  stop(30, rgba(252, 128, 20, 1));
} */

export const temperatureStyle = `{
  background: rgb(0,0,0);
  background: linear-gradient(0deg,
  rgba(130, 22, 146, 1) 0%, 
  rgba(130, 22, 146, 1) 10.5263%, 
  rgba(130, 22, 146, 1) 21.0526%, 
  rgba(141,231,199,1) 26.3158%, 
  rgba(176,247,32,1) 36.8421%, 
  rgba(240,184,0,1) 47.3684%, 
  rgba(251,85,21,1) 57.8947%, 
  rgba(243,54,59,1) 68.4211%, 
  rgba(251,85,21,1) 78.9474%, 
  rgba(243,54,59,1) 89.4737%, 
  rgba(251,85,21,1) 94.7368%,
  rgba(198,0,0,1) 100%);
}`;

/* { **PRESSURE**
 	stop(94000, rgba(0,115,255,1))
	stop(96000, rgba(0,170,255,1))
	stop(98000, rgba(75,208,214,1))
	stop(100000, rgba(141,231,199,1))
	stop(101000, rgba(176,247,32,1))
	stop(102000, rgba(240,184,0,1))
	stop(104000, rgba(251,85,21,1))
	stop(106000, rgba(243,54,59,1))
	stop(108000, rgba(198,0,0,1));
} */

export const pressureStyle = `{
  background: rgb(0,0,0);
  background: linear-gradient(0deg,
  rgba(0,115,255,1) 0%, 
  rgba(0,170,255,1) 14.2857%, 
  rgba(75,208,214,1) 28.5714%, 
  rgba(141,231,199,1) 42.8571%, 
  rgba(176,247,32,1) 50%, 
  rgba(240,184,0,1) 57.1429%, 
  rgba(251,85,21,1) 71.4286%, 
  rgba(243,54,59,1) 85.7143%, 
  rgba(198,0,0,1) 100%);
}`;

/* { **WIND**
  stop(1, rgba(255,255,255, 0))
	stop(5, rgba(238,206,206, 0.4))
	stop(15, rgba(179,100,188, 0.7))
	stop(25,rgba(63,33,59, 0.8))
	stop(50, rgba(116,76,172, 0.9))
	stop(100, rgba(70,0,175,1))
	stop(200, rgba(13,17,38,1));
 } */

 export const windStyle = `{
  background: rgb(0,0,0);
  background: linear-gradient(0deg,
  rgba(0,115,255,1) 0%, 
  rgba(0,170,255,1) 14.2857%, 
  rgba(75,208,214,1) 28.5714%, 
  rgba(141,231,199,1) 42.8571%, 
  rgba(176,247,32,1) 50%, 
  rgba(240,184,0,1) 57.1429%, 
  rgba(251,85,21,1) 71.4286%, 
  rgba(243,54,59,1) 85.7143%, 
  rgba(198,0,0,1) 100%);
}`;