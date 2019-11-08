import { preprocessData } from '../_common/preprocessData';
import { getProcessedData } from '../_common/getProcessedData';

interface IFieldMixMapInfoXML {
  Root: {
    FieldMixMapInfo: Array<{
      $: {
        No: string;
        stringID: string;
        mapPattern: string;
        mapGroup: string;
        element: string;
        collect: string;
        gimmickModel: string;
        enemy: string;
        boss: string;
        point: string;
        sky: string;
      };
    }>;
  };
}

interface IFieldMixMapInfo {
  no: string;
  stringId: string;
  enemyId: string;
  bossId: string;
}

const FILE_NAME = 'FieldMixMapInfo';

preprocessData<IFieldMixMapInfoXML, IFieldMixMapInfo[]>(FILE_NAME, __dirname, data =>
  data.Root.FieldMixMapInfo.map(x => {
    const { No, stringID, enemy, boss } = x.$;

    const processedData: IFieldMixMapInfo = {
      bossId: boss,
      enemyId: enemy,
      no: No,
      stringId: stringID,
    };

    return processedData;
  }),
);

export const fieldMixMapInfo = getProcessedData<IFieldMixMapInfo[]>(FILE_NAME, __dirname);
