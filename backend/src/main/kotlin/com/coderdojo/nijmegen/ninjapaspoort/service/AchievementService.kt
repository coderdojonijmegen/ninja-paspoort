package com.coderdojo.nijmegen.ninjapaspoort.service

import com.coderdojo.nijmegen.ninjapaspoort.repository.AchievementRepository
import com.coderdojo.nijmegen.ninjapaspoort.service.model.Achievement
import org.springframework.stereotype.Service

@Service
class AchievementService(val achievementRepository: AchievementRepository) {

    fun insertAchievement(achievement: Achievement): Achievement {
        return achievementRepository.save(achievement)
    }
}