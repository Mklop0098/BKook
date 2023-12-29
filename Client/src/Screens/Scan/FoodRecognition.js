const foodRecognize = async (image_url) => {
    const USER_ID = 'wsgavf1yywp3';
    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = '494692dadd9943dfa2d57a7a11e96315';
    const APP_ID = 'BKook';
    // Change these to make your own predictions
    const WORKFLOW_ID = 'food-item-recognition-workflow-n7kx7i';
    const IMAGE_URL = image_url
    /////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    /////////////////////////////////////////////////////////////////////////////

    const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

    const stub = ClarifaiStub.grpc();

    // This will be used by every Clarifai endpoint call
    const metadata = new grpc.Metadata();
    metadata.set("authorization", "Key " + PAT);

    return new Promise((resolve, reject) => {
        stub.PostWorkflowResults(
            {
                user_app_id: {
                    "user_id": USER_ID,
                    "app_id": APP_ID
                },
                workflow_id: WORKFLOW_ID,
                inputs: [
                    { data: { image: { url: IMAGE_URL } } }
                ]
            },
            metadata,
            (err, response) => {
                if (err) {
                    reject(err);
                    return;
                }

                if (response.status.code !== 10000) {
                    reject(new Error("Post workflow results failed, status: " + response.status.description));
                    return;
                }

                const list = response.results[0];
                let results = [];

                for (const output of list.outputs) {
                    for (const concept of output.data.concepts) {
                        results.push(concept.name);
                    }
                }

                resolve(results.slice(0, 5));

            }
        );
    });
};

export default foodRecognize;

