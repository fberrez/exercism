// This stub file contains items which aren't used yet; feel free to remove this module attribute
// to enable stricter warnings.
#![allow(unused)]

use std::collections::HashMap;

pub fn can_construct_note(magazine: &[&str], note: &[&str]) -> bool {
    let mut magazine_words: HashMap<&str, u8> = HashMap::new();
    magazine
        .into_iter()
        .for_each(|w| *magazine_words.entry(w).or_insert(1) += 1);

    let mut notes_words: HashMap<&str, u8> = HashMap::new();
    note.into_iter()
        .for_each(|w| *notes_words.entry(w).or_insert(1) += 1);

    let mut is_ok = true;
    for (n_word, n_nb) in &notes_words {
        is_ok = match magazine_words.get(n_word) {
            Some(count) => count >= n_nb,
            None => false,
        };

        if !is_ok {
            break;
        }
    }

    is_ok
}
