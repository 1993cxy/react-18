import React, { useState, useEffect } from 'react';

const canvasNote = () => {
  const canvas = React.createRef();
  const smailing = React.createRef();
  useEffect(() => {
    const cs = canvas.current;
    const ctx = cs.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'green'; //颜色
    ctx.lineWidth = 20; //线宽
    ctx.lineCap = 'square'; //端点
    ctx.lineJoin = 'round'; //拐点
    //②定义路径
    ctx.moveTo(50, 50); //起点
    ctx.lineTo(100, 100); //拐点
    ctx.lineTo(50, 200); //终点
    ctx.closePath(); //闭合
    //③绘制
    ctx.stroke();
  }, []);
  useEffect(() => {
    const sm = smailing.current;
    const ctx = sm.getContext('2d');
    ctx.fillStyle = '#e4353c'; // 设置颜色
    ctx.clearRect(0, 0, 200, 200); // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
    ctx.fillRect(10, 10, 130, 130); // 把(10,10)位置大小为130x130的矩形涂色
    // 利用Path绘制复杂路径:
    var path = new Path2D();
    path.arc(75, 75, 50, 0, Math.PI * 2, true);
    path.moveTo(110, 75);
    path.arc(75, 75, 35, 0, Math.PI, false);
    path.moveTo(65, 65);
    path.arc(60, 65, 5, 0, Math.PI * 2, true);
    path.moveTo(95, 65);
    path.arc(90, 65, 5, 0, Math.PI * 2, true);
    ctx.strokeStyle = '#0ca0ee';
    ctx.stroke(path);
  });
  return (
    <div>
      <canvas
        ref={canvas}
        width={200}
        height={200}
        style={{ background: '#1677ff' }}
      ></canvas>
      <canvas ref={smailing}></canvas>
    </div>
  );
};

export default canvasNote;
