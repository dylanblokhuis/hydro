use rquickjs::{Func, Object};
use std::path::Path;

use crate::bundler::compile_app;

fn print(msg: String) {
    println!("{}", msg);
}

pub fn render(path: &Path, data: String) -> String {
    let js = compile_app(path, data);

    let runtime = rquickjs::Runtime::new().unwrap();
    let ctx = rquickjs::Context::full(&runtime).unwrap();
    ctx.with(|ctx| {
        let global = ctx.globals();
        let obj = Object::new(ctx).unwrap();
        obj.set("log", Func::new("print", print)).unwrap();
        global.set("console", obj).unwrap();

        ctx.eval::<String, String>(js).unwrap()
    })
}
