package com.coderdojo.nijmegen.ninjapaspoort.repository

import com.coderdojo.nijmegen.ninjapaspoort.service.model.Achievement
import com.coderdojo.nijmegen.ninjapaspoort.service.model.Ninja
import org.springframework.data.jpa.repository.JpaRepository

interface AchievementRepository : JpaRepository<Achievement, Long>