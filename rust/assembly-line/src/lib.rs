// This stub file contains items which aren't used yet; feel free to remove this module attribute
// to enable stricter warnings.
#![allow(unused)]

pub fn production_rate_per_hour(speed: u8) -> f64 {
    let base_number: f64 = 221.0;
    let mut success_rate: f64 = 1.0;
    match speed {
        0..=4 => success_rate = 1.0,
        5..=8 => success_rate = 0.9,
        9..=10 => success_rate = 0.77,
        _ => success_rate = 1.0,
    }

    let speed_f64 = speed as f64;

    base_number * speed_f64 * success_rate
}

pub fn working_items_per_minute(speed: u8) -> u32 {
    let production_rate = production_rate_per_hour(speed) as u32;
    production_rate / 60
}
