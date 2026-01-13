export const onesoftSync = async (clientData: any) => {
    const ONE_SOFT_WEBHOOK_URL = "https://hook.onesoft.io/sync/compecer"; // URL de ejemplo

    try {
        const response = await fetch(ONE_SOFT_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                source: "Compecer Express",
                timestamp: new Date().toISOString(),
                customer: {
                    email: clientData.email,
                    name: clientData.name,
                    role: clientData.role,
                    progress: clientData.progress || 0,
                },
                metadata: clientData.metadata || {}
            }),
        });

        if (!response.ok) {
            console.warn('OneSoft Sync status:', response.status);
        }

        return true;
    } catch (error) {
        console.error('OneSoft Webhook Error:', error);
        return false;
    }
};
