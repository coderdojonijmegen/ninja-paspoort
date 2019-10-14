package com.coderdojo.nijmegen.ninjapaspoort.repository

import com.coderdojo.nijmegen.ninjapaspoort.service.model.Ninja
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface NinjaRepository : JpaRepository<Ninja, UUID>