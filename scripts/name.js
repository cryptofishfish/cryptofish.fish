let jsr = 0x5EED;
function rand(){
  jsr^=(jsr<<17);
  jsr^=(jsr>>13);
  jsr^=(jsr<<5);
  return (jsr>>>0)/4294967295;
}

function binomen(){
  let data =[["A","AB","AL","AN","AP","AR","AU","BA","BE","BO","BRA","CA","CAR","CENT","CHAE","CHAN","CHI","CHRO","CHRY","CO","CTE","CY","CYP","DE","E","EU","GA","GAS","GNA","GO","HE","HIP","HO","HY","LA","LAB","LE","LI","LO","LU","MAC","ME","MIC","MO","MU","MY","NA","NAN","NE","NO","O","ON","OP","OS","PA","PER","PHO","PI","PLA","PLEU","PO","PSEU","PTE","RA","RHI","RHOM","RU","SAL","SAR","SCA","SCOM","SE","SI","STE","TAU","TEL","THO","TRI","XE","XI"],
  ["BE","BI","BO","BU","CA","CAM","CAN","CE","CENT","CHA","CHEI","CHI","CHO","CHY","CI","CIRR","CO","DI","DO","DON","DOP","GA","GAS","GO","HI","HYN","LA","LAB","LE","LEOT","LI","LICH","LIS","LO","LOS","LU","LY","MA","ME","MI","MICH","MO","MU","NA","NE","NEC","NI","NO","NOCH","NOP","NOS","PA","PE","PEN","PHA","PHI","PHO","PHY","PHYO","PI","PIP","PIS","PO","POG","POPH","RA","RAE","RAM","REOCH","RI","RICH","RIP","RIS","RO","ROI","ROP","ROS","RY","RYN","SE","SO","TA","TE","TEL","THAL","THE","THO","THOP","THU","TI","TICH","TO","TOG","TOP","TOS","VA","XI","XO"],
  ["BIUS","BUS","CA","CHUS","CION","CON","CUS","DA","DES","DEUS","DON","DUS","GER","GON","GUS","HUS","LA","LEA","LIS","LIUS","LUS","MA","MIS","MUS","NA","NIA","NIO","NIUS","NOPS","NUS","PHEUS","PHIS","PIS","PUS","RA","RAS","RAX","RIA","RION","RIS","RUS","RYS","SA","SER","SIA","SIS","SUS","TER","TES","TEUS","THUS","THYS","TIA","TIS","TUS","TYS"],
  ["A","AE","AL","AN","AR","AT","AU","AUST","AY","BA","BAR","BE","BI","BO","CA","CAL","CAM","CAN","CAR","CAU","CE","CHI","CHRY","COR","CRY","CU","CYA","DA","DE","DEN","DI","DIA","DO","DOR","DU","E","FA","FAS","FES","FI","FLO","FOR","FRE","FUR","GLA","GO","HA","HE","HIP","HO","HYP","I","IM","IN","JA","LA","LAB","LE","LEU","LI","LO","LU","MA","MAC","MAR","ME","MO","MOO","MOR","NA","NE","NI","NIG","NO","O","OR","PA","PAL","PE","PEC","PHO","PLA","PLU","PO","PRO","PU","PUL","RA","RE","RHOM","RI","RO","ROST","RU","SA","SAL","SE","SO","SPI","SPLEN","STRIA","TAU","THO","TRI","TY","U","UN","VA","VI","VIT","VUL","WAL","XAN"],
  ["BA","BAR","BER","BI","BO","BOI","BU","CA","CAN","CAU","CE","CEL","CHA","CHEL","CHOP","CI","CIA","CIL","CIO","CO","COS","CU","DA","DE","DEL","DI","DIA","DO","FAS","FEL","FI","FOR","GA","GE","GI","HA","HYN","KE","LA","LAN","LE","LEA","LEU","LI","LIA","LO","LON","LOP","MA","ME","MEN","MI","MIE","MO","NA","NE","NEA","NEL","NEN","NI","NIF","NO","NOI","NOP","NU","PA","PE","PER","PHA","PHE","PI","PIN","PO","QUI","RA","RAC","RE","REN","RES","RI","RIA","RIEN","RIF","RO","ROR","ROS","ROST","RU","RYTH","SA","SE","SI","SO","SU","TA","TAE","TE","TER","THAL","THO","THU","TI","TIG","TO","TU","VA","VE","VES","VI","VIT","XEL","XI","ZO"],
  ["BEUS","CA","CENS","CEPS","CEUS","CHA","CHUS","CI","CUS","DA","DAX","DENS","DES","DI","DIS","DUS","FER","GA","GI","GUS","KEI","KI","LA","LAS","LI","LIS","LIUS","LOR","LUM","LUS","MA","MIS","MUS","NA","NEUS","NI","NII","NIS","NIUS","NUS","PIS","PUS","RA","RE","RI","RIAE","RIE","RII","RIO","RIS","RIX","RONS","RU","RUM","RUS","SA","SEUS","SI","SIS","SUS","TA","TEUS","THUS","TI","TIS","TOR","TUM","TUS","TZI","ZI"]]
  let freq =[[27,2,4,4,2,2,2,5,2,2,3,4,2,5,3,2,2,2,3,8,3,3,2,2,7,2,3,2,2,2,6,3,2,4,5,2,5,2,3,2,2,5,5,4,2,3,2,3,2,2,9,2,2,2,7,2,2,2,2,2,5,6,2,2,2,2,2,2,2,2,2,4,2,2,2,2,3,3,2,3],
  [2,2,3,3,5,2,11,6,4,2,7,2,4,4,3,3,5,4,9,2,2,4,5,13,3,3,12,3,3,2,8,3,4,15,6,2,3,10,3,3,2,2,2,8,7,3,4,20,2,2,3,4,3,2,10,2,6,2,2,5,2,2,13,2,2,14,3,2,2,9,4,2,5,42,2,4,2,6,3,3,11,2,19,2,3,2,5,3,2,4,2,27,2,2,2,2,2,2],
  [3,3,7,7,3,2,3,2,5,2,13,7,2,3,4,2,13,2,2,2,24,18,13,17,12,4,2,5,3,19,3,2,2,3,7,3,2,5,2,6,29,3,2,2,2,3,4,4,16,2,6,12,5,5,6,2],
  [23,3,11,6,6,3,8,2,2,2,3,3,9,3,8,2,2,3,2,2,2,2,6,2,2,3,4,3,4,2,2,2,2,2,2,15,2,4,2,2,2,2,2,2,2,2,2,5,3,2,2,3,2,2,2,7,2,2,3,3,4,4,13,7,3,10,2,2,2,5,2,3,6,4,14,2,3,2,5,2,2,3,2,3,2,2,2,3,5,2,2,3,2,3,5,2,5,2,3,3,3,3,3,7,2,3,2,4,3,2,2,2,2],
  [5,2,2,4,4,2,2,10,6,2,3,5,3,2,2,6,12,2,3,6,2,22,4,4,2,7,5,6,10,2,2,2,9,7,4,2,2,2,39,3,10,3,2,20,2,10,2,2,12,9,3,8,2,4,19,5,5,3,3,12,2,9,3,2,7,3,4,3,6,2,8,5,2,4,25,2,4,3,2,26,2,2,2,21,2,2,4,6,5,3,6,4,6,2,14,2,19,2,2,2,2,21,3,14,2,3,5,2,5,2,2,2,3],
  [2,7,4,3,5,2,5,2,13,6,2,2,6,8,2,4,3,4,2,5,2,5,11,3,7,19,2,2,2,11,10,4,6,12,3,15,4,6,2,18,3,3,11,4,14,2,2,3,2,13,2,3,2,4,21,7,2,10,8,13,31,2,5,5,2,2,10,68,2,3]]

  let name = choice(data[0],freq[0]);
  let n = ~~(rand()*3);
  for (let i = 0; i < n; i++){
    name += choice(data[1],freq[1]);
  }
  name += choice(data[2],freq[2]);
  name += ' ';
  name += choice(data[3],freq[3]);
  n = ~~(rand()*3);
  for (let i = 0; i < n; i++){
    name += choice(data[4],freq[4]);
  }
  name += choice(data[5],freq[5]);
  name = name.replace(/([A-Z])\1\1+/g,'$1$1');
  return name[0]+name.slice(1).toLowerCase();
}

function choice(opts,percs){
  if (!percs){
    percs = opts.map(x=>1);
  }
  let s = 0;
  for (let i = 0; i < percs.length; i++){
    s += percs[i];
  }
  let r = rand()*s;
  s = 0;
  for (let i = 0; i < percs.length; i++){
    s += percs[i];
    if (r <= s){
      return opts[i];
    }
  }
}

function str_to_seed(str){
  let n = 1;
  for (let i = 0; i < str.length; i++){
    let x = str.charCodeAt(i)+1;
    n ^= x << (7+(i%5));
    // if (i % 2){
      n ^=(n<<17);
      n ^=(n>>13);
      n ^=(n<<5);
    // }
    n = (n>>>0) % 4294967295;
  }
  return n;
}

function main(){
  jsr = ~~(Math.random()*10000);
  seed = binomen();
  return seed
}

if (typeof module != "undefined"){
  module.exports = {main,binomen};
  if (require.main === module) {
    console.log(main());
  }
}