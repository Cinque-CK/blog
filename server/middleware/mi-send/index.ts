export default function() {
    function render( json: object ) {
        this.set('Content-Type', 'application/json');
        this.body = JSON.stringify(json);
    }
    return async (ctx: any, next: any) => {
        ctx.send = render.bind(ctx);
        await next();
    };
}
