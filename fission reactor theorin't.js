import { ExponentialCost, FreeCost, LinearCost } from "./api/Costs";
import { Localization } from "./api/Localization";
import { BigNumber } from "./api/BigNumber";
import { theory } from "./api/Theory";
import { Utils } from "./api/Utils";
var id = "axolotl_OuO";
var name = "fission reactor";
var description = "fission reactor(and some other things)(ps:this is not nuclear craft)";
var authors = "a nub ouo (nubest#1001)";
var version = 1.1;
var currency1, currency2, currency3, currency4, currency5, currency6, currency7, currency8, currency9;
var Um ,UD, URU, UR, NpRU, NpR, PuRU, PuR, AmRU, AmR, CmRU, CmR, BkRU, BkR, CfRU, CfR, URT, NpRT, PuRT, AmRT, CmRT, BkRT, CfRT;
quaternaryEntries = [];
var isCurrencyVisible = (index) => index == 8;
var init = () => {
    currency1 = theory.createCurrency("U","U");
    currency2 = theory.createCurrency("Np","Np");
    currency3 = theory.createCurrency("Pu","Pu");
    currency4 = theory.createCurrency("Am","Am");
    currency5 = theory.createCurrency("Cm","Cm");
    currency6 = theory.createCurrency("Bk","Bk");
    currency7 = theory.createCurrency("Cf","Cf");
    currency8 = theory.createCurrency("Es","Es");
    currency9 = theory.createCurrency("P", "P")
    currency1.value = BigNumber.ZERO
    currency2.value = BigNumber.ZERO
    currency3.value = BigNumber.ZERO
    currency4.value = BigNumber.ZERO
    currency5.value = BigNumber.ZERO
    currency6.value = BigNumber.ZERO
    currency7.value = BigNumber.ZERO
    currency8.value = BigNumber.ZERO
    currency9.value = BigNumber.ZERO
    // Regular Upgrades
    {
        let getDesc = (level) => "(\\text{U}_1)\\text{Uranium mine level:}" +getUm(level).toString(0);
        Um = theory.createUpgrade(0, currency9, new FreeCost());
        Um.getDescription = (_) => Utils.getMath(getDesc(Um.level));
        Um.getInfo = (amount) => Utils.getMathTo(getDesc(Um.level), getDesc(Um.level + 1));
    }
    {
        let getDesc = (level) => "(\\text{U}_2)\\text{Drill power:}" +getUD(level).toString(0);
        UD = theory.createUpgrade(8, currency1, new ExponentialCost(1, Math.log2(1.9)));
        UD.getDescription = (_) => Utils.getMath(getDesc(UD.level));
        UD.getInfo = (amount) => Utils.getMathTo(getDesc(UD.level), getDesc(UD.level + 1));
    }
    //reactor
    {
        let getDesc = (level) => "(\\text{U}_3)\\text{Uranium Reactor power:}" +getUR(level).toString(0);
        UR = theory.createUpgrade(1, currency1, new ExponentialCost(10, Math.log2(1.7)));
        UR.getDescription = (_) => Utils.getMath(getDesc(UR.level));
        UR.getInfo = (amount) => Utils.getMathTo(getDesc(UR.level), getDesc(UR.level + 1));
        UR.isAvailable = false;
    }
    {
        let getDesc = (level) => "(\\text{Np}_1)\\text{Neptunium Reactor power:}" +getNpR(level).toString(0);
        NpR= theory.createUpgrade(2, currency2, new ExponentialCost(10, Math.log2(1.7)));
        NpR.getDescription = (_) => Utils.getMath(getDesc(NpR.level));
        NpR.getInfo = (amount) => Utils.getMathTo(getDesc(NpR.level), getDesc(NpR.level + 1));
        NpR.isAvailable = false;
    }
    {
        let getDesc = (level) => "(\\text{Pu}_1)\\text{Plutonium Reactor power:}" +getPuR(level).toString(0);
        PuR = theory.createUpgrade(3, currency3, new ExponentialCost(10, Math.log2(1.7)));
        PuR.getDescription = (_) => Utils.getMath(getDesc(PuR.level));
        PuR.getInfo = (amount) => Utils.getMathTo(getDesc(PuR.level), getDesc(PuR.level + 1));
        PuR.isAvailable = false;
    }
    {
        let getDesc = (level) => "(\\text{Am}_1)\\text{Americium Reactor power:}" +getAmR(level).toString(0);
        AmR = theory.createUpgrade(4, currency4, new ExponentialCost(10, Math.log2(1.7)));
        AmR.getDescription = (_) => Utils.getMath(getDesc(AmR.level));
        AmR.getInfo = (amount) => Utils.getMathTo(getDesc(AmR.level), getDesc(AmR.level + 1));
        AmR.isAvailable = false;
    }
    {
        let getDesc = (level) => "(\\text{Cm}_1)\\text{Curium Reactor power:}" +getCmR(level).toString(0);
        CmR = theory.createUpgrade(5, currency5, new ExponentialCost(10, Math.log2(1.7)));
        CmR.getDescription = (_) => Utils.getMath(getDesc(CmR.level));
        CmR.getInfo = (amount) => Utils.getMathTo(getDesc(CmR.level), getDesc(CmR.level + 1));
        CmR.isAvailable = false;
    }
    {
        let getDesc = (level) => "(\\text{Bk}_1)\\text{Berkelium Reactor power:}" +getBkR(level).toString(0);
        BkR = theory.createUpgrade(6, currency6, new ExponentialCost(10, Math.log2(1.7)));
        BkR.getDescription = (_) => Utils.getMath(getDesc(BkR.level));
        BkR.getInfo = (amount) => Utils.getMathTo(getDesc(BkR.level), getDesc(BkR.level + 1));
        BkR.isAvailable = false;
    }
    {
        let getDesc = (level) => "(\\text{Cf}_1)\\text{Californium Reactor power:}" +getCfR(level).toString(0);
        CfR = theory.createUpgrade(7, currency7, new ExponentialCost(10, Math.log2(1.7)));
        CfR.getDescription = (_) => Utils.getMath(getDesc(CfR.level));
        CfR.getInfo = (amount) => Utils.getMathTo(getDesc(CfR.level), getDesc(CfR.level + 1));
        CfR.isAvailable = false;
    }
    //"bonus"
    {
        let getDesc = (level) => "(\\text{U}_4)\\text{Uranium fuel purifier power:}2^{" + level + "}";
        let getInfo = (level) => "\\text{Uranium fuel purifier power:}" +getURT(level).toString(0);
        URT = theory.createUpgrade(9, currency2, new ExponentialCost(10, Math.log2(10)));
        URT.getDescription = (_) => Utils.getMath(getDesc(URT.level));
        URT.getInfo = (amount) => Utils.getMathTo(getInfo(URT.level), getInfo(URT.level + 1));
        URT.isAvailable = false;
    }
    {
        let getDesc = (level) => "(\\text{Np}_2)\\text{Neptunium fuel purifier power:}2^{" + level + "}";
        let getInfo = (level) => "\\text{Neptunium fuel purifier power:}" + getNpRT(level).toString(0);
        NpRT= theory.createUpgrade(10, currency3, new ExponentialCost(10, Math.log2(10)));
        NpRT.getDescription = (_) => Utils.getMath(getDesc(NpRT.level));
        NpRT.getInfo = (amount) => Utils.getMathTo(getInfo(NpRT.level), getInfo(NpRT.level + 1));
        NpRT.isAvailable = false;
    }
    {
        let getDesc = (level) => "(\\text{Pu}_2)\\text{Plutonium fuel purifier power:}2^{" + level + "}";
        let getInfo = (level) => "\\text{Plutonium fuel purifier power:}" + getPuRT(level).toString(0);
        PuRT = theory.createUpgrade(11, currency4, new ExponentialCost(10, Math.log2(10)));
        PuRT.getDescription = (_) => Utils.getMath(getDesc(PuRT.level));
        PuRT.getInfo = (amount) => Utils.getMathTo(getInfo(PuRT.level), getInfo(PuRT.level + 1));
        PuRT.isAvailable = false;
    }
    {
        let getDesc = (level) => "(\\text{Am}_2)\\text{Americium fuel purifier power:}2^{" + level + "}";
        let getInfo = (level) => "\\text{Americium fuel purifier power:}" + getAmRT(level).toString(0);
        AmRT = theory.createUpgrade(12, currency5, new ExponentialCost(10, Math.log2(10)));
        AmRT.getDescription = (_) => Utils.getMath(getDesc(AmRT.level));
        AmRT.getInfo = (amount) => Utils.getMathTo(getInfo(AmRT.level), getInfo(AmRT.level + 1));
        AmRT.isAvailable = false;
    }
    {
        let getDesc = (level) => "(\\text{Cm}_2)\\text{Curium fuel purifier power:}2^{" + level + "}";
        let getInfo = (level) => "\\text{Curium fuel purifier power:}" + getCmRT(level).toString(0);
        CmRT = theory.createUpgrade(13, currency6, new ExponentialCost(10, Math.log2(10)));
        CmRT.getDescription = (_) => Utils.getMath(getDesc(CmR.level));
        CmRT.getInfo = (amount) => Utils.getMathTo(getInfo(CmR.level), getInfo(CmR.level + 1));
        CmRT.isAvailable = false;
    }
    {
        let getDesc = (level) => "(\\text{Bk}_2)\\text{Berkelium fuel purifier power:}2^{" + level + "}";
        let getInfo = (level) => "\\text{Berkelium fuel purifier power:}" + getBkRT(level).toString(0);
        BkRT = theory.createUpgrade(14, currency7, new ExponentialCost(10, Math.log2(10)));
        BkRT.getDescription = (_) => Utils.getMath(getDesc(BkR.level));
        BkRT.getInfo = (amount) => Utils.getMathTo(getInfo(BkR.level), getInfo(BkR.level + 1));
        BkRT.isAvailable = false;
    }
    {
        let getDesc = (level) => "(\\text{Cf}_1)\\text{Californium fuel purifier power:}2^{" + level + "}";
        let getInfo = (level) => "\\text{Californium fuel purifier power:}" + getCfRT(level).toString(0);
        CfRT = theory.createUpgrade(15, currency8, new ExponentialCost(10, Math.log2(10)));
        CfRT.getDescription = (_) => Utils.getMath(getDesc(CfRT.level));
        CfRT.getInfo = (amount) => Utils.getMathTo(getInfo(CfRT.level), getInfo(CfRT.level + 1));
        CfRT.isAvailable = false;
    }
    // Permanent Upgrades
    theory.createPublicationUpgrade(0, currency2, 1000);
    theory.createBuyAllUpgrade(1, currency6, 1);
    theory.createAutoBuyerUpgrade(2, currency8, 10);
    {
        URU = theory.createPermanentUpgrade(3, currency1, new LinearCost(200000, 0));
        URU.maxLevel = 1;
        URU.getDescription = (_) => Localization.getUpgradeUnlockDesc("\\text{Uranium Reactor}");
        URU.getInfo = (_) => Localization.getUpgradeUnlockInfo("\\text{Uranium Reactor}");
        URU.boughtOrRefunded = (_) => updateAvailability()
    }
    {
        NpRU = theory.createPermanentUpgrade(4, currency2, new LinearCost(40000, 0));
        NpRU.maxLevel = 1;
        NpRU.getDescription = (_) => Localization.getUpgradeUnlockDesc("\\text{Neptunium Reactor}");
        NpRU.getInfo = (_) => Localization.getUpgradeUnlockInfo("\\text{Neptunium Reactor}");
        NpRU.boughtOrRefunded = (_) => updateAvailability()
    }
    {
        PuRU = theory.createPermanentUpgrade(5, currency3, new LinearCost(80000, 0));
        PuRU.maxLevel = 1;
        PuRU.getDescription = (_) => Localization.getUpgradeUnlockDesc("\\text{Plutonium Reactor}");
        PuRU.getInfo = (_) => Localization.getUpgradeUnlockInfo("\\text{Plutonium Reactor}");
        PuRU.boughtOrRefunded = (_) => updateAvailability()
    }
    {
        AmRU = theory.createPermanentUpgrade(6, currency4, new LinearCost(160000, 0));
        AmRU.maxLevel = 1;
        AmRU.getDescription = (_) => Localization.getUpgradeUnlockDesc("\\text{Americium Reactor}");
        AmRU.getInfo = (_) => Localization.getUpgradeUnlockInfo("\\text{Americium Reactor}");
        AmRU.boughtOrRefunded = (_) => updateAvailability()
    }
    {
        CmRU = theory.createPermanentUpgrade(7, currency5, new LinearCost(320000, 0));
        CmRU.maxLevel = 1;
        CmRU.getDescription = (_) => Localization.getUpgradeUnlockDesc("\\text{Curium Reactor}");
        CmRU.getInfo = (_) => Localization.getUpgradeUnlockInfo("\\text{Curium Reactor}");
        CmRU.boughtOrRefunded = (_) => updateAvailability()
    }
    {
        BkRU = theory.createPermanentUpgrade(8, currency6, new LinearCost(160000, 0));
        BkRU.maxLevel = 1;
        BkRU.getDescription = (_) => Localization.getUpgradeUnlockDesc("\\text{Berkelium Reactor}");
        BkRU.getInfo = (_) => Localization.getUpgradeUnlockInfo("\\text{Berkelium Reactor}");
        BkRU.boughtOrRefunded = (_) => updateAvailability()
    }
    {
        CfRU = theory.createPermanentUpgrade(9, currency7, new LinearCost(640000, 0));
        CfRU.maxLevel = 1;
        CfRU.getDescription = (_) => Localization.getUpgradeUnlockDesc("\\text{Californium Reactor}");
        CfRU.getInfo = (_) => Localization.getUpgradeUnlockInfo("\\text{Californium Reactor}");
        CfRU.boughtOrRefunded = (_) => updateAvailability()
    }
    //// Milestone Upgrades
    theory.setMilestoneCost(new LinearCost(50, 10));

    updateAvailability();
}
var updateAvailability = () => {
    UR.isAvailable = URU.level > 0;
    NpR.isAvailable = NpRU.level > 0;
    PuR.isAvailable = PuRU.level > 0;
    AmR.isAvailable = AmRU.level > 0;
    CmR.isAvailable = CmRU.level > 0;
    BkR.isAvailable = BkRU.level > 0;
    CfR.isAvailable = CfRU.level > 0;
    URT.isAvailable = URU.level > 0;
    NpRT.isAvailable = NpRU.level > 0;
    PuRT.isAvailable = PuRU.level > 0;
    AmRT.isAvailable = AmRU.level > 0;
    CmRT.isAvailable = CmRU.level > 0;
    BkRT.isAvailable = BkRU.level > 0;
    CfRT.isAvailable = CfRU.level > 0;
}
var tick = (elapsedTime, multiplier) => {
    let dt = BigNumber.from(elapsedTime * multiplier);
    let bonus = theory.publicationMultiplier;
    //decay
    currency1.value += Math.log2(Um.level+1)*dt*bonus*(UD.level+1)
    currency2.value += currency1.value*BigNumber.from(1.123141e-12)-currency2.value*BigNumber.from(2e-5)
    currency3.value += currency1.value*BigNumber.from(4.1341e-10)-currency3.value*BigNumber.from(5.5202256e-11)
    currency4.value += currency3.value*BigNumber.from(1.231e-12)-currency4.value*BigNumber.from(1.36298592e-10)
    currency5.value += currency4.value*BigNumber.from(1.266e-12)-currency5.value*BigNumber.from(2.83824e-11)
    currency6.value += currency5.value*BigNumber.from(5.67648e-12)-currency6.value*BigNumber.from(4.351968e-10)
    currency7.value += currency1.value*BigNumber.from(1e-11)-currency7.value*BigNumber.from(1.538784e-6)
    currency8.value += currency7.value*BigNumber.from(1.538784e-6)*Math.log2(bonus)
    currency9.value += ((currency1.value)*dt*0.001+(currency2.value)*dt*10.0+(currency3.value)*dt*62.2+(currency4.value)*dt*317.22+(currency5.value)*dt*315.0+(currency6.value)*dt*10880+(currency7.value)*dt*30000)*(currency8.value+1).pow(1)
    //Uranium
    currency1.value += currency1.value < UR.level ? 0 : UR.level*0.55
    currency2.value += currency1.value < UR.level ? 0 : UR.level*0.06
    currency3.value += currency1.value < UR.level ? 0 : UR.level*0.02
    currency4.value += currency1.value < UR.level ? 0 : UR.level*0.006
    currency5.value += currency1.value < UR.level ? 0 : UR.level*0.005
    currency6.value += currency1.value < UR.level ? 0 : UR.level*0.00003
    currency7.value += currency1.value < UR.level ? 0 : UR.level*0.00001
    currency8.value += currency1.value < UR.level ? 0 : UR.level*0.00000002*URT.level
    currency9.value += currency1.value < UR.level ? 0 : UR.level*dt*BigNumber.from(2.22517e3)*URT.level
    //neptunium
    currency1.value += currency2.value < NpR.level ? 0 : NpR.level*0.1
    currency2.value += currency2.value < NpR.level ? 0 : NpR.level*0.412
    currency3.value += currency2.value < NpR.level ? 0 : NpR.level*0.165
    currency4.value += currency2.value < NpR.level ? 0 : NpR.level*0.014
    currency5.value += currency2.value < NpR.level ? 0 : NpR.level*0.016
    currency6.value += currency2.value < NpR.level ? 0 : NpR.level*0.001
    currency7.value += currency2.value < NpR.level ? 0 : NpR.level*0.008
    currency8.value += currency2.value < NpR.level ? 0 : NpR.level*0.0001*NpRT.level
    currency9.value += currency2.value < NpR.level ? 0 : UR.level*NpR.level*dt*BigNumber.from(2.23124e5)*NpRT.level
    //plutonium
    currency3.value += currency3.value < PuR.level ? 0 : PuR.level*0.3
    currency4.value += currency3.value < PuR.level ? 0 : PuR.level*0.22
    currency5.value += currency3.value < PuR.level ? 0 : PuR.level*0.26
    currency6.value += currency3.value < PuR.level ? 0 : PuR.level*0.01
    currency7.value += currency3.value < PuR.level ? 0 : PuR.level*0.0008
    currency8.value += currency3.value < PuR.level ? 0 : PuR.level*0.0003*PuRT.level
    currency9.value += currency3.value < PuR.level ? 0 : UR.level*NpR.level*PuR.level*BigNumber.from(2.089e7)*dt*PuRT.level
    //americium
    currency4.value += currency4.value < AmR.level ? 0 : AmR.level*0.4
    currency5.value += currency4.value < AmR.level ? 0 : AmR.level*0.1
    currency6.value += currency4.value < AmR.level ? 0 : AmR.level*0.03
    currency7.value += currency4.value < AmR.level ? 0 : AmR.level*0.02
    currency8.value += currency4.value < AmR.level ? 0 : AmR.level*0.008*AmRT.level
    currency9.value += currency4.value < AmR.level ? 0 : UR.level*NpR.level*PuR.level*AmR.level*BigNumber.from(4.42e9)*dt*AmRT.level
    //curium
    currency5.value += currency5.value < CmR.level ? 0 : CmR.level*0.3
    currency6.value += currency5.value < CmR.level ? 0 : CmR.level*0.4
    currency7.value += currency5.value < CmR.level ? 0 : CmR.level*0.1
    currency8.value += currency5.value < CmR.level ? 0 : CmR.level*0.07*CmRT.level
    currency9.value += currency5.value < CmR.level ? 0 : UR.level*NpR.level*PuR.level*AmR.level*CmR.level*BigNumber.from(2.3e11)*dt*CmRT.level
    //berkelium
    currency6.value += currency6.value < BkR.level ? 0 : BkR.level*0.3
    currency7.value += currency6.value < BkR.level ? 0 : BkR.level*0.4
    currency8.value += currency6.value < BkR.level ? 0 : BkR.level*0.1*BkRT.level
    currency9.value += currency6.value < BkR.level ? 0 : UR.level*NpR.level*PuR.level*AmR.level*CmR.level*BkR.level*BigNumber.from(2e13)*dt*BkRT.level
    //californium
    currency6.value += currency7.value < CfR.level ? 0 : CfR.level*0.2
    currency7.value += currency7.value < CfR.level ? 0 : CfR.level*0.2
    currency8.value += currency7.value < CfR.level ? 0 : CfR.level*0.1*CfRT.level
    currency9.value += currency7.value < CfR.level ? 0 : UR.level*NpR.level*PuR.level*AmR.level*CmR.level*BkR.level*CfR.level*BigNumber.from(5e15)*dt*CfRT.level
    //tweaks decay
    currency1.value += -currency1.value*BigNumber.from(4.1341e-10)
    //tweaks fission reactor .ect
    currency1.value += currency1.value < UR.level ? 0 : -UR.level*dt;
    currency2.value += currency2.value < NpR.level ? 0 : -NpR.level*dt;
    currency3.value += currency3.value < PuR.level ? 0 : -PuR.level*dt;
    currency4.value += currency4.value < AmR.level ? 0 : -AmR.level*dt;
    currency5.value += currency5.value < CmR.level ? 0 : -CmR.level*dt;
    currency6.value += currency6.value < BkR.level ? 0 : -BkR.level*dt;
    currency7.value += currency7.value < CfR.level ? 0 : -CfR.level*dt;
    theory.invalidateQuaternaryValues();
}

var postPublish = () => {
    currency1.value = BigNumber.ZERO;
    currency2.value = BigNumber.ZERO;
    currency3.value = BigNumber.ZERO;
    currency4.value = BigNumber.ZERO;
    currency5.value = BigNumber.ZERO;
    currency6.value = BigNumber.ZERO;
    currency7.value = BigNumber.ZERO;
    currency8.value = BigNumber.ZERO;
    currency9.value = BigNumber.ZERO;
}
var getPrimaryEquation = () => {
    let result = "P = \\sum DE_s + \\sum RE_s"
    return result;
}
var getSecondaryEquation = () => theory.latexSymbol + "=\\max P^{0.9}"
var getQuaternaryEntries = () => {
    if (quaternaryEntries.length == 0)
    {
        quaternaryEntries.push(new QuaternaryEntry("U", null));
        quaternaryEntries.push(new QuaternaryEntry("Np", null));
        quaternaryEntries.push(new QuaternaryEntry("Pu", null));
        quaternaryEntries.push(new QuaternaryEntry("Am", null));
        quaternaryEntries.push(new QuaternaryEntry("Cm", null));
        quaternaryEntries.push(new QuaternaryEntry("Bk", null));
        quaternaryEntries.push(new QuaternaryEntry("Cf", null));
        quaternaryEntries.push(new QuaternaryEntry("Es", null));
    }
    quaternaryEntries[0].value=currency1.value
    quaternaryEntries[1].value=currency2.value
    quaternaryEntries[2].value=currency3.value
    quaternaryEntries[3].value=currency4.value
    quaternaryEntries[4].value=currency5.value
    quaternaryEntries[5].value=currency6.value
    quaternaryEntries[6].value=currency7.value
    quaternaryEntries[7].value=currency8.value
    return quaternaryEntries
}
var getPublicationMultiplier = (tau) => tau.pow(0.2);
var getPublicationMultiplierFormula = (symbol) => symbol+"^{0.164}";
var getTau = () => currency9.value.pow(0.9)
var get2DGraphValue = () => currency9.value.sign * (BigNumber.ONE + currency9.value.abs()).log10().toNumber();
var getUm = (level) => Utils.getStepwisePowerSum(level, 1.0000000001, 10, 0);
var getUR = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getNpR = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getPuR = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getAmR = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getCmR = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getBkR = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getCfR = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getUD = (level) => BigNumber.TWO.pow(level);
var getURT = (level) => BigNumber.TWO.pow(level);
var getNpRT = (level) => BigNumber.TWO.pow(level);
var getPuRT = (level) => BigNumber.TWO.pow(level);
var getAmRT = (level) => BigNumber.TWO.pow(level);
var getCmRT = (level) => BigNumber.TWO.pow(level);
var getBkRT = (level) => BigNumber.TWO.pow(level);
var getCfRT = (level) => BigNumber.TWO.pow(level);
init();