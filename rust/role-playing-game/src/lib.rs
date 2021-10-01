// This stub file contains items which aren't used yet; feel free to remove this module attribute
// to enable stricter warnings.
#![allow(unused)]

pub struct Player {
    pub health: u32,
    pub mana: Option<u32>,
    pub level: u32,
}

impl Player {
    pub fn revive(&self) -> Option<Player> {
        if self.health == 0 {
            let mut new_player = Player {
                health: 100,
                level: self.level,
                mana: None,
            };
            new_player.mana = if self.level >= 10 { Some(100) } else { None };

            return Some(new_player);
        }

        None
    }

    pub fn cast_spell(&mut self, mana_cost: u32) -> u32 {
        if self.mana == None {
            if (mana_cost > self.health) {
                self.health = 0;
            } else {
                self.health = self.health - mana_cost;
            }
            return 0;
        }

        if self.mana < Some(mana_cost) {
            return 0;
        }

        self.mana = Some(self.mana.unwrap() - mana_cost);
        mana_cost * 2
    }
}