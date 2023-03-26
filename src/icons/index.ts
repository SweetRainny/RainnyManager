export default function iconLoad(app : any) {
    const directives = import.meta.glob('./icons/svg/*.svg')
    // console.log(directives)
    for (const dire in directives) {
        const direKey = dire.match(/\.\/icons\/svg\/(.*?).svg/)![1];
        directives[dire]().then((res : any) => {
            const direValue = res.default;
            app.component(direKey, direValue);
        })
    }
}


