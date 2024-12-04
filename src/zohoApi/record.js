const ZOHO = window.ZOHO;

export async function getRecordsFromRelatedList({
  module,
  recordId,
  RelatedListAPI,
}) {
  try {
    const relatedListResp = await ZOHO.CRM.API.getRelatedRecords({
      Entity: module,
      RecordID: recordId,
      RelatedList: RelatedListAPI,
    });

    if (relatedListResp.statusText === "nocontent") {
      return { data: [], error: null };
    }

    if (!(relatedListResp.statusText === "nocontent")) {
      return { data: relatedListResp?.data, error: null };
    }
  } catch (getRecordsFromRelatedListError) {
    console.log({ getRecordsFromRelatedListError });
    return { data: null, error: "Something went wrong" };
  }
}

export async function getLatestSevenRelatedListItemByDeluge({ recordId }) {
  try {
    var func_name = "test_zzz";
    var req_data = {
      arguments: JSON.stringify({ record_id: "408043000051248194" }),
    };
    const resp = await ZOHO.CRM.FUNCTIONS.execute(func_name, req_data);
    console.log({ resp });
    // return {
    //   data: resp?.data,
    //   error: null,
    // };
  } catch (getLatestSevenRelatedListItemByDelugeError) {
    console.log({ getLatestSevenRelatedListItemByDelugeError });
    return {
      data: null,
      error: "Something went wrong.",
    };
  }
}

export const record = {
  getRecordsFromRelatedList,
  getLatestSevenRelatedListItemByDeluge,
};
