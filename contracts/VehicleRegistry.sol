pragma solidity ^0.5.0;

//Contracts are equivalent to classes
contract VehicleRegistry {
    //Private variable hash array of type bytes32
    bytes32[] public vehicleArray;
    //Pass in a vehicle and hash
    function hashVehicle(string memory vehicle)
    private
    pure
    returns (bytes32)
    {
        return sha256(abi.encodePacked(vehicle));
    }
    //Store hashed vehicle
    function storeVehicle(string calldata vehicle)
    external
    {
        bytes32 hashedVehicle = hashVehicle(vehicle);
        vehicleArray.push(hashedVehicle);
    }
    //Check a new vehicle to see if contained in hashedVehicle array
    function createVehicle(string memory vehicle)
    public
    view
    returns(bool)
    {
        bytes32 newHashedVehicle = hashVehicle(vehicle);
        for(uint256 i = 0; i < vehicleArray.length; i++){
            if(vehicleArray[i] == newHashedVehicle){
                return true;
            }
        }
        return false;
    }
    //Returns the hash of a submitted vehicle, may be able to use hashVehicle function as public
    //Pure functions perform a calculation only
    function verifyDuplicateVIN(string memory vehicle)
    public
    pure
    returns(bytes32)
    {
        return sha256(abi.encodePacked(vehicle));
    }
}