package com.coderdojo.nijmegen.ninjapaspoort.service.model

import java.util.*
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.OneToMany

@Entity
data class Ninja(@Id var uuid: UUID = UUID.randomUUID(), @OneToMany var achievements: MutableList<Achievement> = mutableListOf())
