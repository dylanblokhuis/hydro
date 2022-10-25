use std::path::PathBuf;

fn make_relative_path(path: PathBuf) -> String {
    let current_dir = std::env::current_dir().unwrap();
    let mut relative_react_path = path
        .strip_prefix(&current_dir)
        .unwrap()
        .to_str()
        .unwrap()
        .to_string();

    relative_react_path.insert_str(0, "./");
    relative_react_path
}

fn main() {
    let out_dir = PathBuf::from(&std::env::var("OUT_DIR").unwrap());

    let lib_path = out_dir.join("lib.tsx");
    let react_path = out_dir.join("react.js");
    let react_dom_path = out_dir.join("react-dom.js");
    std::fs::copy("js/lib.tsx", &lib_path).unwrap();
    std::fs::copy("js/react.js", &react_path).unwrap();
    std::fs::copy("js/react-dom.js", &react_dom_path).unwrap();
    let relative_lib_path = make_relative_path(lib_path);
    let relative_react_path = make_relative_path(react_path);
    let relative_react_dom_path = make_relative_path(react_dom_path);

    let ts_config = r#"{
  "compilerOptions": {
    "jsx": "react",
    "baseUrl": ".",
    "paths": {
      "react": ["<react.js>"],
      "react-dom": ["<react-dom.js>"],
      "$lib": ["<lib.tsx>"]
    }
  }
}
    "#;

    // replace react.js with react_out
    std::fs::write(
        "tsconfig.json",
        ts_config
            .replace("<react.js>", &relative_react_path)
            .replace("<react-dom.js>", &relative_react_dom_path)
            .replace("<lib.tsx>", &relative_lib_path),
    )
    .unwrap();

    println!("cargo:rerun-if-changed=build.rs");
}
