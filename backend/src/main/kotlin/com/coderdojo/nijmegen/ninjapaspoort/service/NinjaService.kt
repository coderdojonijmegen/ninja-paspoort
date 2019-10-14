package com.coderdojo.nijmegen.ninjapaspoort.service

import com.coderdojo.nijmegen.ninjapaspoort.repository.NinjaRepository
import com.coderdojo.nijmegen.ninjapaspoort.service.model.Achievement
import com.coderdojo.nijmegen.ninjapaspoort.service.model.Ninja
import org.springframework.stereotype.Service
import java.util.*

@Service
class NinjaService(val ninjaRepository: NinjaRepository, val achievementService: AchievementService) {

    fun insertNinja(ninja: Ninja) = ninjaRepository.save(ninja)

    fun retrieveNinja(id: UUID): Ninja = ninjaRepository.getOne(id)

    fun addAchievement(ninjaId: UUID, achievement: Achievement) {
        val savedAchievement = achievementService.insertAchievement(achievement)

        ninjaRepository.save(ninjaRepository.getOne(ninjaId).apply {
            achievements.add(savedAchievement)
        })
    }
}