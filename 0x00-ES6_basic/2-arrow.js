export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    const self = this;
    this.addNeighborhood = (newNeighbourhood) => {
        self.sanFranciscoNeighborhoods.push(newNeighbourhood);
        return self.sanFranciscoNeighborhoods

    }
}
