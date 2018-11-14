export default function(hierarchyRoot, colormap) {
    let colorIndex = 0;
    hierarchyRoot.children.forEach(function(child) {
        child.descendants().forEach(function(desc){
            // desc.color = colormap[colorIndex % colormap.length];
            desc.color = colormap[hashCode(desc.data.name) % colormap.length];
            console.log(desc.data.name + ": " + hashCode(desc.data.name));
        });
        colorIndex++;
    });
}

function hashCode(str) {
  return str.split('').reduce((prevHash, currVal) =>
    (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
}
