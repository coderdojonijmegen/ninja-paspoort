package com.coderdojo.nijmegen.ninjapaspoort.service.model

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Achievement(@Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long, val level: Int = -1, val description: String)
