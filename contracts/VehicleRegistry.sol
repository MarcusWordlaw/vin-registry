pragma solidity ^0.5.2;
import "./ERC721.sol";

contract VehicleRegistry is ERC721
{
    // Mapping from VIN to Vehicle Details Contract
    mapping (bytes32 => address) private vehicleDetailsContract;

    //Mapping to check VIN association with any MASTER FLOOR contract
    mapping (bytes32 => address) private vehicleAssociationWithMasterContract;

    //colletaral type
    mapping (bytes32 => bytes32) private vehicleCollateralTypes;

    //collateral type
    mapping (bytes32 => uint8) private vehicleStatus;

    //owner of the contract
    address owner;

    function Constructor() public {
        owner = msg.sender; //Bank is the owner
    }

    //Onboard a new Vehicle
    function createVehicle(bytes32 _vin, address _to) public
    {
       super._mint(_to,_vin);
    }

    //Transfer the ownership of the Vehicle
    function TransferOwner(address _to, bytes32 _tokenId) public
    {
        super._transferFrom(msg.sender,_to,_tokenId);
    }

    //set Vehicle Details
    function setVehicleDetails(bytes32 _vin, address _detailAddress) public returns (bool)
    {
        vehicleDetailsContract[_vin] = _detailAddress;
        return true;
    }
    //get Vehicle Details
    function getVehicleDetails(bytes32 _vin) public view returns (address)
    {
        return  vehicleDetailsContract[_vin];
    }

    //Verify double spend
    function verifyDuplicateVIN(bytes32 _vin) public view returns (bool)
    {
        return  super._exists(_vin);
    }

    //associate vehicle with master floor plan

    function associateVehicleWithMasterFloor(bytes32 _vin, address _masterContractAddress) public returns (bool)
    {
        vehicleAssociationWithMasterContract[_vin] = _masterContractAddress;
        return true;
    }

    //Release vehicle from master floor plan

    function releaseVehicleWithMasterFloor(bytes32 _vin) public returns (bool)
    {
        vehicleAssociationWithMasterContract[_vin] = address(0);
        return true;
    }

    //verify double flooring

    function verifyDoubleFlooring(bytes32 _vin) public view returns (bool)
    {
        address ownerContract = vehicleAssociationWithMasterContract[_vin];
        return ownerContract != address(0);
    }

    //Set collateral type for the vehicle
    function setVehicleCollateralType (bytes32 _vin,bytes32 _collateralType) public returns (bool)
    {
        vehicleCollateralTypes[_vin] = _collateralType;
        return true;
    }

    //get Collateral type
    function getVehicleCollateralType (bytes32 _vin) public view returns (bytes32)
    {
        return vehicleCollateralTypes[_vin];
    }

    //Adding methods for ACH parsing
    function removeVehicle(bytes32 _vin) public returns (bool){
        delete vehicleDetailsContract[_vin];
        delete vehicleAssociationWithMasterContract[_vin];
        delete vehicleCollateralTypes[_vin];
        super._burn(_vin);
        return true;
    }

    function addVehicle(bytes32 _vin, address _owner, address _detailContractAddress, bytes32 _collateralType,
                        address _masterContractAddress, address _dealerAddress) public returns (bool) {
        super._mint(_owner,_vin);
        vehicleDetailsContract[_vin] = _detailContractAddress;
        vehicleAssociationWithMasterContract[_vin] = _masterContractAddress;
        vehicleCollateralTypes[_vin] = _collateralType;
        super._transferFrom(msg.sender,_dealerAddress,_vin);
        return true;
    }
}