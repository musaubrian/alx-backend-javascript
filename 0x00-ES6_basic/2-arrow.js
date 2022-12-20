export default function getNeighborhoodsList () {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const Self = this;
  this.addNeighborhood = (newNeighbourhood) => {
    Self.sanFranciscoNeighborhoods.push(newNeighbourhood);
    return Self.sanFranciscoNeighborhoods;
  };
}
