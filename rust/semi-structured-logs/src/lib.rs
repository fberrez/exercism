// This stub file contains items which aren't used yet; feel free to remove this module attribute
// to enable stricter warnings.
#![allow(unused)]

/// various log levels
#[derive(Clone, PartialEq, Debug)]
pub enum LogLevel {
    Info,
    Warning,
    Error,
    Debug,
}
/// primary function for emitting logs
pub fn log(level: LogLevel, message: &str) -> String {
    match level {
        LogLevel::Info => info(message),
        LogLevel::Warning => warn(message),
        LogLevel::Error => error(message),
        LogLevel::Debug => debug(message),
    }
}

pub fn info(message: &str) -> String {
    let mut text: String = "[INFO]: ".to_string();
    text.push_str(message);
    text
}
pub fn warn(message: &str) -> String {
    let mut text: String = "[WARNING]: ".to_string();
    text.push_str(message);
    text
}
pub fn error(message: &str) -> String {
    let mut text: String = "[ERROR]: ".to_string();
    text.push_str(message);
    text
}
pub fn debug(message: &str) -> String {
    let mut text: String = "[DEBUG]: ".to_string();
    text.push_str(message);
    text
}