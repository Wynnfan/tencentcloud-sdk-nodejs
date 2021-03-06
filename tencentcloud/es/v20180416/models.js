/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const AbstractModel = require("../../common/abstract_model");

/**
 * ES集群日志详细信息
 * @class
 */
class InstanceLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志时间
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 日志级别
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 集群节点ip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 日志内容
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * 实例操作记录中的流程任务信息
 * @class
 */
class TaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 任务进度
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 任务完成时间
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * 子任务
         * @type {Array.<SubTaskDetail> || null}
         */
        this.SubTasks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;

        if (params.SubTasks) {
            this.SubTasks = new Array();
            for (let z in params.SubTasks) {
                let obj = new SubTaskDetail();
                obj.deserialize(params.SubTasks[z]);
                this.SubTasks.push(obj);
            }
        }

    }
}

/**
 * DescribeInstanceOperations请求参数结构体
 * @class
 */
class DescribeInstanceOperationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 起始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 分页起始值
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 操作详情
 * @class
 */
class OperationDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例原始配置信息
         * @type {Array.<KeyValue> || null}
         */
        this.OldInfo = null;

        /**
         * 实例更新后配置信息
         * @type {Array.<KeyValue> || null}
         */
        this.NewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OldInfo) {
            this.OldInfo = new Array();
            for (let z in params.OldInfo) {
                let obj = new KeyValue();
                obj.deserialize(params.OldInfo[z]);
                this.OldInfo.push(obj);
            }
        }

        if (params.NewInfo) {
            this.NewInfo = new Array();
            for (let z in params.NewInfo) {
                let obj = new KeyValue();
                obj.deserialize(params.NewInfo[z]);
                this.NewInfo.push(obj);
            }
        }

    }
}

/**
 * RestartInstance返回参数结构体
 * @class
 */
class RestartInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ik插件词典新
 * @class
 */
class DictInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词典键值
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 词典名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 词典大小，单位B
         * @type {number || null}
         */
        this.Size = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * CreateInstance返回参数结构体
 * @class
 */
class CreateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceLogs请求参数结构体
 * @class
 */
class DescribeInstanceLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 日志类型
         * @type {number || null}
         */
        this.LogType = null;

        /**
         * 搜索词
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 日志开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 日志结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 分页起始值
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 时间排序方式
         * @type {number || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * ES cos自动备份信息
 * @class
 */
class CosBackup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启cos自动备份
         * @type {boolean || null}
         */
        this.IsAutoBackup = null;

        /**
         * 自动备份时间
         * @type {string || null}
         */
        this.BackupTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsAutoBackup = 'IsAutoBackup' in params ? params.IsAutoBackup : null;
        this.BackupTime = 'BackupTime' in params ? params.BackupTime : null;

    }
}

/**
 * OperationDetail使用此结构的数组描述新旧配置
 * @class
 */
class KeyValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 键
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 值
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * CreateInstance请求参数结构体
 * @class
 */
class CreateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 节点数量
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 实例版本,支持"5.6.4"、"6.4.3"
         * @type {string || null}
         */
        this.EsVersion = null;

        /**
         * 节点规格： 
ES.S1.SMALL2: 1核2G
ES.S1.MEDIUM4: 2核4G
ES.S1.MEDIUM8: 2核8G
ES.S1.LARGE16: 4核16G
ES.S1.2XLARGE32: 8核32G
ES.S1.4XLARGE64: 16核64G
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * 节点存储容量，单位GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 访问密码，密码需8到16位，至少包括两项（[a-z,A-Z],[0-9]和[()`~!@#$%^&*-+=_|{}:;' <>,.?/]的特殊符号
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 实例名称，1-50 个英文、汉字、数字、连接线-或下划线_
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 计费类型: 
PREPAID：预付费，即包年包月 
POSTPAID_BY_HOUR：按小时后付费，默认值
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 包年包月购买时长，单位由TimeUint决定，默认为月
         * @type {number || null}
         */
        this.ChargePeriod = null;

        /**
         * 自动续费标识，取值范围： 
RENEW_FLAG_AUTO：自动续费
RENEW_FLAG_MANUAL：不自动续费，用户手动续费
如不传递该参数，普通用于默认不自动续费，SVIP用户自动续费
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * 节点存储类型,取值范围:    
CLOUD_PREMIUM: 高硬能云硬盘  
CLOUD_SSD: SSD云硬盘
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 计费时长单位，当前只支持“m”，表示月
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 是否自动使用代金券，1是，0否，默认不使用
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * 是否创建专用主节点
         * @type {boolean || null}
         */
        this.EnableDedicatedMaster = null;

        /**
         * 专用主节点个数
         * @type {number || null}
         */
        this.MasterNodeNum = null;

        /**
         * 专用主节点类型，与NodeType支持的规格相同
         * @type {string || null}
         */
        this.MasterNodeType = null;

        /**
         * 专用主节点磁盘大小，单位GB（系统默认配置50GB，暂不支持自定义）
         * @type {number || null}
         */
        this.MasterNodeDiskSize = null;

        /**
         * 配置文件中的ClusterName（系统默认配置为实例ID，暂不支持自定义）
         * @type {string || null}
         */
        this.ClusterNameInConf = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.EsVersion = 'EsVersion' in params ? params.EsVersion : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ChargePeriod = 'ChargePeriod' in params ? params.ChargePeriod : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.EnableDedicatedMaster = 'EnableDedicatedMaster' in params ? params.EnableDedicatedMaster : null;
        this.MasterNodeNum = 'MasterNodeNum' in params ? params.MasterNodeNum : null;
        this.MasterNodeType = 'MasterNodeType' in params ? params.MasterNodeType : null;
        this.MasterNodeDiskSize = 'MasterNodeDiskSize' in params ? params.MasterNodeDiskSize : null;
        this.ClusterNameInConf = 'ClusterNameInConf' in params ? params.ClusterNameInConf : null;

    }
}

/**
 * 实例详细信息
 * @class
 */
class InstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 用户ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 用户UIN
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 实例所属VPC的UID
         * @type {string || null}
         */
        this.VpcUid = null;

        /**
         * 实例所属子网的UID
         * @type {string || null}
         */
        this.SubnetUid = null;

        /**
         * 实例状态，0:处理中,1:正常,-1停止,-2:销毁中,-3:已销毁
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例计费模式。取值范围：  PREPAID：表示预付费，即包年包月  POSTPAID_BY_HOUR：表示后付费，即按量计费  CDHPAID：CDH付费，即只对CDH计费，不对CDH上的实例计费。
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 包年包月购买时长,单位:月
         * @type {number || null}
         */
        this.ChargePeriod = null;

        /**
         * 自动续费标识。取值范围：  NOTIFY_AND_AUTO_RENEW：通知过期且自动续费  NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费  DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费  默认取值：NOTIFY_AND_AUTO_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * 节点规格:  ES.S1.SMALL2 : 1核2G  ES.S1.MEDIUM4 : 2核4G  ES.S1.MEDIUM8 : 2核8G  ES.S1.LARGE16 : 4核16G  ES.S1.2XLARGE32 : 8核32G  ES.S1.3XLARGE32 : 12核32G  ES.S1.6XLARGE32 : 24核32G
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * 节点个数
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 节点CPU核数
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * 节点内存大小，单位GB
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 节点磁盘类型
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 节点磁盘大小，单位GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * ES域名
         * @type {string || null}
         */
        this.EsDomain = null;

        /**
         * ES VIP
         * @type {string || null}
         */
        this.EsVip = null;

        /**
         * ES端口
         * @type {number || null}
         */
        this.EsPort = null;

        /**
         * Kibana访问url
         * @type {string || null}
         */
        this.KibanaUrl = null;

        /**
         * ES版本号
         * @type {string || null}
         */
        this.EsVersion = null;

        /**
         * ES配置项
         * @type {string || null}
         */
        this.EsConfig = null;

        /**
         * ES访问控制配置
         * @type {EsAcl || null}
         */
        this.EsAcl = null;

        /**
         * 实例创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例最后修改操作时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 实例到期时间
         * @type {string || null}
         */
        this.Deadline = null;

        /**
         * 实例类型（实例类型标识，当前只有1,2两种）
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * Ik分词器配置
         * @type {EsDictionaryInfo || null}
         */
        this.IkConfig = null;

        /**
         * 专用主节点配置
         * @type {MasterNodeInfo || null}
         */
        this.MasterNodeInfo = null;

        /**
         * cos自动备份配置
         * @type {CosBackup || null}
         */
        this.CosBackup = null;

        /**
         * 是否允许cos自动备份
         * @type {boolean || null}
         */
        this.AllowCosBackup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.VpcUid = 'VpcUid' in params ? params.VpcUid : null;
        this.SubnetUid = 'SubnetUid' in params ? params.SubnetUid : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ChargePeriod = 'ChargePeriod' in params ? params.ChargePeriod : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.EsDomain = 'EsDomain' in params ? params.EsDomain : null;
        this.EsVip = 'EsVip' in params ? params.EsVip : null;
        this.EsPort = 'EsPort' in params ? params.EsPort : null;
        this.KibanaUrl = 'KibanaUrl' in params ? params.KibanaUrl : null;
        this.EsVersion = 'EsVersion' in params ? params.EsVersion : null;
        this.EsConfig = 'EsConfig' in params ? params.EsConfig : null;

        if (params.EsAcl) {
            let obj = new EsAcl();
            obj.deserialize(params.EsAcl)
            this.EsAcl = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.IkConfig) {
            let obj = new EsDictionaryInfo();
            obj.deserialize(params.IkConfig)
            this.IkConfig = obj;
        }

        if (params.MasterNodeInfo) {
            let obj = new MasterNodeInfo();
            obj.deserialize(params.MasterNodeInfo)
            this.MasterNodeInfo = obj;
        }

        if (params.CosBackup) {
            let obj = new CosBackup();
            obj.deserialize(params.CosBackup)
            this.CosBackup = obj;
        }
        this.AllowCosBackup = 'AllowCosBackup' in params ? params.AllowCosBackup : null;

    }
}

/**
 * DeleteInstance返回参数结构体
 * @class
 */
class DeleteInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstances返回参数结构体
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的实例个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例详细信息列表
         * @type {Array.<InstanceInfo> || null}
         */
        this.InstanceList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new InstanceInfo();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceLogs返回参数结构体
 * @class
 */
class DescribeInstanceLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的日志条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 日志详细信息列表
         * @type {Array.<InstanceLog> || null}
         */
        this.InstanceLogList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceLogList) {
            this.InstanceLogList = new Array();
            for (let z in params.InstanceLogList) {
                let obj = new InstanceLog();
                obj.deserialize(params.InstanceLogList[z]);
                this.InstanceLogList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestartInstance请求参数结构体
 * @class
 */
class RestartInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要重启的实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 是否强制重启
         * @type {boolean || null}
         */
        this.ForceRestart = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;

    }
}

/**
 * DescribeInstances请求参数结构体
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例所属可用区，不传则默认所有可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 一个或多个集群实例ID
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 一个或多个集群实例名称
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * 分页起始值, 默认值0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，默认值20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段：1，实例ID；2，实例名称；3，可用区；4，创建时间，若orderKey未传递则按创建时间降序排序
         * @type {number || null}
         */
        this.OrderByKey = null;

        /**
         * 排序方式：0，升序；1，降序；若传递了orderByKey未传递orderByType, 则默认升序
         * @type {number || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderByKey = 'OrderByKey' in params ? params.OrderByKey : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * UpdateInstance请求参数结构体
 * @class
 */
class UpdateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要操作的实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 修改后的实例名称, 1-50 个英文、汉字、数字、连接线-或下划线_
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 横向扩缩容后的节点个数
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 修改后的配置项, JSON格式字符串。当前仅支持以下配置项：
action.destructive_requires_name
indices.fielddata.cache.size
indices.query.bool.max_clause_count
         * @type {string || null}
         */
        this.EsConfig = null;

        /**
         * 重置后的Kibana密码, 8到16位，至少包括两项（[a-z,A-Z],[0-9]和[-!@#$%&^*+=_:;,.?]的特殊符号
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 修改后的访问控制列表
         * @type {EsAcl || null}
         */
        this.EsAcl = null;

        /**
         * 磁盘大小,单位GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 节点规格: 
ES.S1.SMALL2: 1 核 2G
ES.S1.MEDIUM4: 2 核 4G 
ES.S1.MEDIUM8: 2 核 8G 
ES.S1.LARGE16: 4 核 16G 
ES.S1.2XLARGE32: 8 核 32G 
ES.S1.4XLARGE64: 16 核 64G
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * 专用主节点个数
         * @type {number || null}
         */
        this.MasterNodeNum = null;

        /**
         * 专用主节点规格，与NodeType支持的规格相同
         * @type {string || null}
         */
        this.MasterNodeType = null;

        /**
         * 专用主节点磁盘大小， 单位GB（系统默认配置为50GB,暂不支持自定义）
         * @type {number || null}
         */
        this.MasterNodeDiskSize = null;

        /**
         * 更新配置时是否强制重启
         * @type {boolean || null}
         */
        this.ForceRestart = null;

        /**
         * COS自动备份信息
         * @type {CosBackup || null}
         */
        this.CosBackup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.EsConfig = 'EsConfig' in params ? params.EsConfig : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.EsAcl) {
            let obj = new EsAcl();
            obj.deserialize(params.EsAcl)
            this.EsAcl = obj;
        }
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.MasterNodeNum = 'MasterNodeNum' in params ? params.MasterNodeNum : null;
        this.MasterNodeType = 'MasterNodeType' in params ? params.MasterNodeType : null;
        this.MasterNodeDiskSize = 'MasterNodeDiskSize' in params ? params.MasterNodeDiskSize : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;

        if (params.CosBackup) {
            let obj = new CosBackup();
            obj.deserialize(params.CosBackup)
            this.CosBackup = obj;
        }

    }
}

/**
 * ES IK词库信息
 * @class
 */
class EsDictionaryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启用词词典列表
         * @type {Array.<DictInfo> || null}
         */
        this.MainDict = null;

        /**
         * 停用词词典列表
         * @type {Array.<DictInfo> || null}
         */
        this.Stopwords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MainDict) {
            this.MainDict = new Array();
            for (let z in params.MainDict) {
                let obj = new DictInfo();
                obj.deserialize(params.MainDict[z]);
                this.MainDict.push(obj);
            }
        }

        if (params.Stopwords) {
            this.Stopwords = new Array();
            for (let z in params.Stopwords) {
                let obj = new DictInfo();
                obj.deserialize(params.Stopwords[z]);
                this.Stopwords.push(obj);
            }
        }

    }
}

/**
 * DescribeInstanceOperations返回参数结构体
 * @class
 */
class DescribeInstanceOperationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 操作记录
         * @type {Array.<Operation> || null}
         */
        this.Operations = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Operations) {
            this.Operations = new Array();
            for (let z in params.Operations) {
                let obj = new Operation();
                obj.deserialize(params.Operations[z]);
                this.Operations.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ES集群配置项
 * @class
 */
class EsAcl extends  AbstractModel {
    constructor(){
        super();

        /**
         * kibana访问黑名单
         * @type {Array.<string> || null}
         */
        this.BlackIpList = null;

        /**
         * kibana访问白名单
         * @type {Array.<string> || null}
         */
        this.WhiteIpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlackIpList = 'BlackIpList' in params ? params.BlackIpList : null;
        this.WhiteIpList = 'WhiteIpList' in params ? params.WhiteIpList : null;

    }
}

/**
 * 实例专用主节点相关信息
 * @class
 */
class MasterNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否启用了专用主节点
         * @type {boolean || null}
         */
        this.EnableDedicatedMaster = null;

        /**
         * 专用主节点规格
         * @type {string || null}
         */
        this.MasterNodeType = null;

        /**
         * 专用主节点个数
         * @type {number || null}
         */
        this.MasterNodeNum = null;

        /**
         * 专用主节点CPU核数
         * @type {number || null}
         */
        this.MasterNodeCpuNum = null;

        /**
         * 专用主节点内存大小，单位GB
         * @type {number || null}
         */
        this.MasterNodeMemSize = null;

        /**
         * 专用主节点磁盘大小，单位GB
         * @type {number || null}
         */
        this.MasterNodeDiskSize = null;

        /**
         * 专用主节点磁盘类型
         * @type {string || null}
         */
        this.MasterNodeDiskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableDedicatedMaster = 'EnableDedicatedMaster' in params ? params.EnableDedicatedMaster : null;
        this.MasterNodeType = 'MasterNodeType' in params ? params.MasterNodeType : null;
        this.MasterNodeNum = 'MasterNodeNum' in params ? params.MasterNodeNum : null;
        this.MasterNodeCpuNum = 'MasterNodeCpuNum' in params ? params.MasterNodeCpuNum : null;
        this.MasterNodeMemSize = 'MasterNodeMemSize' in params ? params.MasterNodeMemSize : null;
        this.MasterNodeDiskSize = 'MasterNodeDiskSize' in params ? params.MasterNodeDiskSize : null;
        this.MasterNodeDiskType = 'MasterNodeDiskType' in params ? params.MasterNodeDiskType : null;

    }
}

/**
 * DeleteInstance请求参数结构体
 * @class
 */
class DeleteInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要销毁的实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 实例操作记录流程任务中的子任务信息（如升级检查任务中的各个检查项）
 * @class
 */
class SubTaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子任务名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 子任务结果
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 子任务错误信息
         * @type {string || null}
         */
        this.ErrMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

    }
}

/**
 * UpdateInstance返回参数结构体
 * @class
 */
class UpdateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ES集群操作详细信息
 * @class
 */
class Operation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作唯一id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 操作开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 操作类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 操作详情
         * @type {OperationDetail || null}
         */
        this.Detail = null;

        /**
         * 操作结果
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 流程任务信息
         * @type {Array.<TaskDetail> || null}
         */
        this.Tasks = null;

        /**
         * 操作进度
         * @type {number || null}
         */
        this.Progress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Detail) {
            let obj = new OperationDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.Result = 'Result' in params ? params.Result : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskDetail();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.Progress = 'Progress' in params ? params.Progress : null;

    }
}

module.exports = {
    InstanceLog: InstanceLog,
    TaskDetail: TaskDetail,
    DescribeInstanceOperationsRequest: DescribeInstanceOperationsRequest,
    OperationDetail: OperationDetail,
    RestartInstanceResponse: RestartInstanceResponse,
    DictInfo: DictInfo,
    CreateInstanceResponse: CreateInstanceResponse,
    DescribeInstanceLogsRequest: DescribeInstanceLogsRequest,
    CosBackup: CosBackup,
    KeyValue: KeyValue,
    CreateInstanceRequest: CreateInstanceRequest,
    InstanceInfo: InstanceInfo,
    DeleteInstanceResponse: DeleteInstanceResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeInstanceLogsResponse: DescribeInstanceLogsResponse,
    RestartInstanceRequest: RestartInstanceRequest,
    DescribeInstancesRequest: DescribeInstancesRequest,
    UpdateInstanceRequest: UpdateInstanceRequest,
    EsDictionaryInfo: EsDictionaryInfo,
    DescribeInstanceOperationsResponse: DescribeInstanceOperationsResponse,
    EsAcl: EsAcl,
    MasterNodeInfo: MasterNodeInfo,
    DeleteInstanceRequest: DeleteInstanceRequest,
    SubTaskDetail: SubTaskDetail,
    UpdateInstanceResponse: UpdateInstanceResponse,
    Operation: Operation,

}
