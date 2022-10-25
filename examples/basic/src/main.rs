use std::path::Path;

use hydro::render;

fn main() {
    dbg!(render(Path::new("home.tsx"), "[]".into()));
}
