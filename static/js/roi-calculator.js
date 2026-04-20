
(() => {
  const nodesList = [10, 20, 50, 150, 300];
  const servicesList = [5, 10, 15, 20];

  const SAVINGS_INHOUSE = {
    5:  {10:220400, 20:296100, 50:388800, 150:486000, 300:583200},
    10: {10:330600, 20:404800, 50:486000, 150:583200, 300:680400},
    15: {10:525000, 20:583200, 50:680400, 150:777600, 300:874800},
    20: {10:630200, 20:680400, 50:777600, 150:874800, 300:1069200}
  };

  const SAVINGS_AWS = {
    5:  {10:170080, 20:346210, 50:1074250, 150:2762400, 300:4604000},
    10: {10:230100, 20:463810, 50:1342800, 150:3453000, 300:5755000},
    15: {10:610200, 20:1008710, 50:2685650, 150:6906000, 300:11510000},
    20: {10:750300, 20:1539110, 50:4028500, 150:10359000, 300:17265000}
  };

  const SAVINGS_VENDORS = {
    5:  {10:529200, 20:899640, 50:1529388, 150:2599960, 300:4419931},
    10: {10:637200, 20:1083240, 50:1841508, 150:3130564, 300:5321958},
    15: {10:745000, 20:1266500, 50:2153050, 150:3660185, 300:6222315},
    20: {10:842400, 20:1432080, 50:2434536, 150:4138711, 300:7035809}
  };

  const usd = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});
  const el = s => document.querySelector(s);

  function buildScale(containerId, values, onPick, initialIndex=0) {
    const box = el(containerId);
    box.innerHTML='';
    values.forEach((v,i)=>{
      const b=document.createElement('button');
      b.className='pill'+(i===initialIndex?' active':'');
      b.textContent=String(v);
      b.dataset.value=String(v);
      b.onclick=()=>{[...box.children].forEach(c=>c.classList.remove('active'));b.classList.add('active');onPick(v);};
      box.appendChild(b);
    });
  }

  let selNodes=nodesList[0], selServices=servicesList[0];

  function currentSavings(){
    return {
      inhouse:SAVINGS_INHOUSE[selServices][selNodes],
      cloud:SAVINGS_AWS[selServices][selNodes],
      vendors:SAVINGS_VENDORS[selServices][selNodes],
    };
  }

  function update(){
    const {cloud,inhouse,vendors}=currentSavings();
    el('#saveCloud').textContent=usd.format(cloud);
    el('#saveInhouse').textContent=usd.format(inhouse);
    el('#saveVendors').textContent=usd.format(vendors);
    el('#badgeSel').textContent=`${selNodes} nodes · ${selServices} services · 3 years`;
  }

  buildScale('#nodes-scale', nodesList, v=>{selNodes=v;update();});
  buildScale('#services-scale', servicesList, v=>{selServices=v;update();});
  update();
})();
